import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkout } from '../actions/cartActions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import LocationContainer from './LocationContainer'
import { loadDishes } from '../actions/productActions'
import { loadLocation, loadAreas } from '../actions/locationActions'

class CartContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadDishes,loadLocation,loadAreas } = this.props
    // Dispatch the requests
    loadDishes()
    loadLocation()
    loadAreas()
  }

  render() {
    const { products, total, checkout, location } = this.props
    return (
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
  }

}

// const CartContainer = ({ products, total, checkout, location }) => (
//   <div>
//     <LocationContainer />
//     <Cart
//       location={location}
//       products={products}
//       total={total}
//       onCheckoutClicked={() => checkout(products, total)}>
//     </Cart>
//   </div>
//
// )

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkout, loadDishes, loadLocation, loadAreas }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
