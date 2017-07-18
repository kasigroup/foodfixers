import React, { PropTypes } from 'react'

const Product = ({ price, title, quantity, desc }) => (
  <div className="inline-block side-dish-text">
      <h5 className="product-title">{title}</h5>
      <div dangerouslySetInnerHTML={{__html: desc ? desc : "No description"}}></div>
      {price}kr {quantity ? ` x ${quantity}` : null}
    </div>
)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string
}

export default Product
