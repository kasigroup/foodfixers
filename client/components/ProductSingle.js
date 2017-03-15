import React, { PropTypes } from 'react'

const ProductSingle = ({ product, onAddToCartClicked }) => (
  <div>
    <h3>{product.name}</h3>
    <p>{product.price}kr</p>
    <p>{product.description}</p>
    <p>Product id: {product.id}</p>
    <button
      className="btn"
      onClick={onAddToCartClicked}>Add to cart
    </button>
  </div>
)


export default ProductSingle
