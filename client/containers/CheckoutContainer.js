import React, { Component,PropTypes } from 'react'
import Checkout from '../components/Checkout'


class CheckoutContainer extends Component {

  constructor(props) {
    super(props)
  }


  render() {
      const { total, products, onCheckoutClicked } = this.props
      return (
        <div>
          <Checkout total={total} products={products} />
        </div>

      )
  }
}


export default CheckoutContainer
