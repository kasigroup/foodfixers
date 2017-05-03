import React, { PropTypes } from 'react'
import SideProduct from './SideProduct'
import { Link } from 'react-router'

const SideDish = ({ dish, onAddToCartClicked }) => (
  <div className="productItem">
    <Link>
      <SideProduct
        title={dish.name}
        price={dish.price} />
    </Link>
    <button
      className="btn main-btn btn-modal"
      onClick={onAddToCartClicked}>Add to cart
    </button>
  </div>
)


export default SideDish
