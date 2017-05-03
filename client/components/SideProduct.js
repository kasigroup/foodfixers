import React, { PropTypes } from 'react'

const Product = ({ price, title, quantity, desc }) => (
  <div className="inline-block">
    <h5 className="product-title">{title}</h5> {desc ? desc : "No description"}<br/> {price}kr {quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string
}

export default Product
