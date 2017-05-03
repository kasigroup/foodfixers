import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleSideDishes } from '../reducers/sidedishes'
import { addToCart } from '../actions/productActions'
import SideDish from '../components/SideDish'




class ProductsContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
      const { sidedishes, addToCart } = this.props
      return (
        <div>
          {sidedishes.map(dish =>
            <SideDish
              key={dish.id}
              dish={dish}
              onAddToCartClicked={() => addToCart(dish.id)} />
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
  return bindActionCreators({ addToCart }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
