import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions/cartActions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import LocationContainer from './LocationContainer'

const CartContainer = ({ products, total, checkout, location }) => (
  <div>
    <LocationContainer />
    <Cart
      location={location}
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products, total)}>
    </Cart>
  </div>

)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  location: state.form.location,
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
