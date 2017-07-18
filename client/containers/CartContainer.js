import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkout } from '../actions/cartActions'
import { getTotal, getTotalSide , getCartProducts, getOrder, getCartSideDishes } from '../reducers'
import Cart from '../components/Cart'
import { addNotification } from '../actions/notificationActions'
import LocationContainer from './LocationContainer'
import CheckoutContainer from './CheckoutContainer'
import { removeFromCart } from '../actions/productActions'
import { loadDishes } from '../actions/productActions'
import { loadDeliveries } from '../actions/deliveriesActions'
import { loadLocation, loadAreas } from '../actions/locationActions'

class CartContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      confirmCheck: false
    };
    this.removingFromCart = this.removingFromCart.bind(this);
    this.acceptCheckout = this.acceptCheckout.bind(this);

  }

  componentDidMount() {
    const { loadDishes,loadLocation,loadAreas,loadDeliveries, products, order } = this.props
    // Dispatch the requests
    loadDishes()
    loadDeliveries()
    loadAreas()
  }

  removingFromCart(id, name){
    const { removeFromCart, addNotification } = this.props
    removeFromCart(id)
    addNotification(`Removed "${name}" from cart`, "success")
  }

  acceptCheckout(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (value) {
      this.setState({
        confirmCheck: true
      });
    }else {
      this.setState({
        confirmCheck: false
      });
    }

  }

  render() {
    const { products, total, checkout, location, areas, orderFormatted } = this.props
    return (
      <div>
        <LocationContainer />
        <Cart
          products={products}
          total={total}
          removingFromCart={this.removingFromCart}
        >
        </Cart>
        <label>
          Jag godkänner avtalet:
          <input
            className="confirm-check"
            name="confirmCheck"
            checked={this.state.confirmCheck}
            type="checkbox"
            onChange={this.acceptCheckout} />
        </label>
        <CheckoutContainer products={products} orderFormatted={orderFormatted} confirmCheck={this.state.confirmCheck} location={location} total={total} />
      </div>
    )
  }

}


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
  orderFormatted: getOrder(state),
  location: state.cart.choosenLocation,
  total: getTotal(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkout, loadDishes, loadLocation, loadAreas, loadDeliveries, removeFromCart, addNotification }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
