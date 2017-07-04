import React, { PropTypes } from 'react'

const Product = ({ price, title, quantity, desc }) => (
  <div>
    <div className="product-text">
      <span className="product-title">{title} </span>
      <div dangerouslySetInnerHTML={{__html: desc}}></div>
    </div>  {quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string
}

export default Product
