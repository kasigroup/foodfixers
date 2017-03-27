import React, { PropTypes } from 'react'
import Product from './Product'
import { Link } from 'react-router'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="productItem">
    <Link to={`product/${product.id}`}>
    <div className="product-image">
      <img src="http://i.imgur.com/UEL3Q8q.jpg"></img>
    </div>
    <Product
      title={product.name}
      desc={product.description}
      price={product.price} />
    </Link>
    <button
      className="btn product-btn"
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
