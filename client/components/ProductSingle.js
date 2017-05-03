import React, { PropTypes } from 'react'


const ProductSingle = ({ product, onAddToCartClicked, image }) => (
  <div>
    <div className="product-single-header" style={image}>

    </div>
    <h3>{product.name}</h3>
    <p>{product.price}kr</p>
    <p>{product.description}</p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <button
      className="btn main-btn"
      onClick={onAddToCartClicked}>Add to cart
    </button>
  </div>
)


export default ProductSingle
