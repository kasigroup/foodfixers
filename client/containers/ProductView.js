import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductSingle from '../components/ProductSingle'


const ProductView = ({ match, products, addToCart }) => {

  if (products.length > 0) {

    // Get params id
    const { id } = match.params;
    // params id from string to int
    const paramsId = parseInt(id)
    // Find index in array and give back the one with the same id as params
    const index = products.findIndex((product) => product.id === paramsId);
    // Return the meal with the right id
    const product = products[index];

    if (!product) {
      return (
        <p>No product here!</p>
      )
    }else {
      return (
        <div>
          <ProductSingle
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
           />
        </div>
      )
    }  
  }else {
    return (
      <p>Loading...</p>
    )
  }

}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductView)
