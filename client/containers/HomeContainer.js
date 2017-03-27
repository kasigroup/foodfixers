import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import { loadDishes } from '../actions/productActions'
import { loadProfile } from '../actions/profileActions'




class HomeContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { loadDishes,loadProfile } = this.props
    loadDishes()
    loadProfile()
  }

  render() {
      return (
        <div>
          <div className="Home-Header">

          </div>
          <ProductsContainer />
        </div>

      )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadDishes,loadProfile }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer)
