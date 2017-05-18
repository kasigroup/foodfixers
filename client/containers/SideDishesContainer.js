import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleSideDishes } from '../reducers/sidedishes'
import { addNotification } from '../actions/notificationActions'
import { addToCart } from '../actions/productActions'
import SideDish from '../components/SideDish'




class ProductsContainer extends Component {

  constructor(props) {
    super(props)

    this.addToTheCart = this.addToTheCart.bind(this);
  }


  addToTheCart(id, name) {
    const { addToCart, addNotification } = this.props
    addToCart(id)
    addNotification(`Added "${name}" to cart`,"success")
  }

  render() {
      const { sidedishes } = this.props
      return (
        <div>
          <p className="align-center">Do you want a side to that?</p>
          {sidedishes.map(dish =>
            <SideDish
              key={dish.id}
              dish={dish}
              onAddToCartClicked={() => this.addToTheCart(dish.id, dish.name)} />
          )}
        </div>
      )
  }
}


const mapStateToProps = state => ({
  sidedishes: getVisibleSideDishes(state.sideDishes),
  profile: state.profile_data.profile
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, addNotification }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
