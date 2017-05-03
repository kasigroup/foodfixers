import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import SideDishesContainer from './SideDishesContainer'
import { loadDishes, loadSideDishes } from '../actions/productActions'
import { loadProfile } from '../actions/profileActions'
import ModalContainer from './ModalContainer'

class HomeContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { loadDishes,loadProfile, loadSideDishes } = this.props
    loadDishes()
    loadSideDishes()
    loadProfile()
  }

  render() {
      return (
        <div>
          <ProductsContainer />
          <ModalContainer />
        </div>

      )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadDishes,loadProfile, loadSideDishes }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer)
