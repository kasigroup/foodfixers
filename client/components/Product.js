import React, { PropTypes } from 'react'

const Product = ({ price, title, quantity, desc }) => (
  <div>
    <p className="product-text"><span className="product-title">{title}</span> {desc ? desc : "No description"} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ultrices justo.</p>  {quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string
}

export default Product
