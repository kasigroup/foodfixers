import React, { PropTypes } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div id="productItem">
    <Link to={`product/${product.id}`}>
    <Product
      title={product.name}
      desc={product.description}
      price={product.price} />
    </Link>
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
