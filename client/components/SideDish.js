import React, { PropTypes } from 'react'
import Product from './Product'
import { Link } from 'react-router'

const SideDish = ({ dish, onAddToCartClicked }) => (
  <div className="productItem">
    <Link>
      <Product
        title={dish.name}
        price={dish.price} />
    </Link>
    <button
      className="btn main-btn"
      onClick={onAddToCartClicked}>Add to cart
    </button>
  </div>
)


export default SideDish
