import React, { Component,PropTypes } from 'react'
import Checkout from '../components/Checkout'


class CheckoutContainer extends Component {

  constructor(props) {
    super(props)
  }


  render() {
      const { total, products, orderFormatted, onCheckoutClicked, location } = this.props
      return (
        <div>
          <Checkout total={total} products={products} choosenLocation={location} orderFormatted={orderFormatted} />
        </div>

      )
  }
}


export default CheckoutContainer
