import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'




class ProductsContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { products, profile, addToCart } = this.props
      return (
        <ProductsList title="Products">
            {products.map(product =>
                <ProductItem
                  key={product.id}
                  product={product}
                  onAddToCartClicked={() => addToCart(product.id)} />
            )}
        </ProductsList>
      )
  }
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
