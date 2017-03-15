import React, { PropTypes } from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div id="productItem">
    <Product
      title={product.name}
      desc={product.description}
      price={product.price} />
    <button
      className="btn"
      onClick={onAddToCartClicked}>Add to cart
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
