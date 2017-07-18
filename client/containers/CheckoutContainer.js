import React, { Component,PropTypes } from 'react'
import Checkout from '../components/Checkout'


class CheckoutContainer extends Component {

  constructor(props) {
    super(props)
  }


  render() {
      const { total, products, orderFormatted, onCheckoutClicked, location, confirmCheck } = this.props
      return (
        <div>
          <Checkout total={total} products={products} confirmCheck={confirmCheck} choosenLocation={location} orderFormatted={orderFormatted} />
        </div>

      )
  }
}


export default CheckoutContainer
