import React, { PropTypes } from 'react'


const ProductSingle = ({ product, onAddToCartClicked, image }) => (
  <div>
    <div className="product-single-header" style={image}>

    </div>
    <h3>{product.name}</h3>
    <p>{product.price}kr</p>
    <div dangerouslySetInnerHTML={{__html: product.description}}></div>
    <button
      className="btn main-btn"
      onClick={onAddToCartClicked}>Add to cart
    </button>
  </div>
)


export default ProductSingle
