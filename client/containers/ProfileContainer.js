import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadProfile,loadOrders } from '../actions/profileActions'
import { getVisibleProducts } from '../reducers/products'


class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log("Loading Profile")
    dispatch(loadProfile())
    dispatch(loadOrders())
  }

   render() {
     const { profile, orders, products } = this.props
     return (
       <div>
         <h3 className="title">Profile</h3>
         <p className="profile-name">{profile.first_name} <span/> {profile.last_name}</p>
         <h3>Orders</h3>
         {orders.map((item, i) =>  <div key={i}><p>id: {item.id} Price: {item.total}kr</p></div>)}
       </div>
     )
   }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile,
  orders: state.profile_data.orders
})

export default connect(
  mapStateToProps
)(ProfileContainer)
