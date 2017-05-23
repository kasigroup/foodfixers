import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import { addNotification } from '../actions/notificationActions'
import { getVisibleCategories } from '../reducers/categories'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'




class ProductsContainer extends Component {

  constructor(props) {
    super(props)
    this.addToTheCart = this.addToTheCart.bind(this);
  }

  addToTheCart(id, name){
    const { addToCart, openModal, addNotification } = this.props
    addToCart(id)
    addNotification(`Added "${name}" to cart`,"success")
    openModal()
  }

  render() {
    const { products, profile, addToCart, openModal, category, categories } = this.props

    let gettingCategory = categories.find(function(cat){
      if (cat.id === parseInt(category)) {
        return true
      }else {
        return false
      }
    })

    let categoryArray = products.filter(function(product){
      return product.category_id === parseInt(category);
    })


      return (
        <div>
          <div className="product-intro">
            <h4>Meals</h4>
            <p>Our fresh dishes</p>
            <p>{`${gettingCategory.name}`}</p>
          </div>
          <ProductsList title="Products">
            {categoryArray.map(product =>
              <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => this.addToTheCart(product.id, product.name)} />
            )}
          </ProductsList>
        </div>

      )
  }
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile,
  categories: getVisibleCategories(state.categories),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, addNotification }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
