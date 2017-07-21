import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { checkout } from '../actions/cartActions'
import { stripeKey } from '../globalFunctions/helpers';

class Checkout extends Component {

  constructor(props) {
    super(props)

    this.sendStripeData = this.sendStripeData.bind(this);
  }

  sendStripeData(token) {
    const { total, products, checkout, orderFormatted, choosenLocation } = this.props
    checkout(orderFormatted, total, token, choosenLocation)
  }

  render() {
    const { total, choosenLocation, confirmCheck } = this.props

    const choosenLocationInt = parseInt(choosenLocation)

    const totalInt = parseInt(total)
    // Changing to öre from only kr
    const totalOre = totalInt * 100
    return (
      // ...
      <StripeCheckout
        name="FoodFixers Express"
        currency="SEK"
        amount={totalOre}
        token={this.sendStripeData}
        stripeKey={stripeKey}
      >
        <button className="btn main-btn" disabled={total <= 0 || choosenLocationInt <= 0 || !confirmCheck}>
          Checkout
        </button>
      </StripeCheckout>
    )
  }


}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkout }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(Checkout)
