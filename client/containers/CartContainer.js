import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkout } from '../actions/cartActions'
import { getTotal, getCartProducts, getOrder } from '../reducers'
import Cart from '../components/Cart'
import LocationContainer from './LocationContainer'
import CheckoutContainer from './CheckoutContainer'
import { loadDishes } from '../actions/productActions'
import { loadDeliveries } from '../actions/deliveriesActions'
import { loadLocation, loadAreas } from '../actions/locationActions'

class CartContainer extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const { loadDishes,loadLocation,loadAreas,loadDeliveries, products, order } = this.props
    // Dispatch the requests
    loadDishes()
    loadDeliveries()
    loadAreas()


  }

  render() {
    const { products, total, checkout, location, areas, orderFormatted } = this.props
    return (
      <div>
        <LocationContainer />
        <Cart
          location={location}
          products={products}
          total={total}
          >
        </Cart>
        <CheckoutContainer products={products} orderFormatted={orderFormatted} total={total} />
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
  location: state.form.location,
  total: getTotal(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkout, loadDishes, loadLocation, loadAreas, loadDeliveries }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
