import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadProfile,loadOrders } from '../actions/profileActions'
import { getVisibleProducts } from '../reducers/products'
import Loader from 'react-loader-advanced';
import { loadDishes, loadSideDishes } from '../actions/productActions'
import OrderItem from '../components/OrderItem'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)

    this.getOrderProduct = this.getOrderProduct.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log("Loading Profile")
    dispatch(loadProfile())
    dispatch(loadOrders())
    dispatch(loadDishes())
    dispatch(loadSideDishes())
  }

  getOrderProduct(dish) {
    const { orders, products } = this.props

    const index = products.findIndex((product) => product.id === dish);
    const product = products[index];

    console.log(product)
  }

  //<OrderItem item={item} products={products} />

   render() {
     const { profile, orders, products } = this.props



     function Orders() {
       if (orders.length <= 0) {
         return <p>Loading...</p>;
       }else {
         return (
         <div>{orders.map((item, i) =>
           <div className="order" key={i}>
             <p><b>Produkter</b></p>
             {item.items.map((dish,i) =>
               <div key={i} className="profile-product">
                 <span>{dish.product.name}</span>
                 <span> {dish.quantity}st</span>
                 <span> {dish.quantity * dish.product.price}kr</span>
               </div>)}
             <p><b>Summa</b></p>
             <p>{item.total}kr</p>
           </div>)}
         </div>)
       }

     }

     return (
       <div>
         <h3 className="title">Profil</h3>
         <p className="profile-name">{profile.first_name} <span/> {profile.last_name}</p>
         <h3>Ordrar</h3>
         <Orders />
       </div>
     )
   }
}

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile,
  orders: state.profile_data.orders
})

export default connect(
  mapStateToProps
)(ProfileContainer)
