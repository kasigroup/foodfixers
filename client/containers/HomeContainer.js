import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import SideDishesContainer from './SideDishesContainer'
import { loadDishes, loadSideDishes, loadCategories } from '../actions/productActions'
import { loadProfile } from '../actions/profileActions'
import ModalContainer from './ModalContainer'

class HomeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      loadedDishes: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentWillMount() {
    const { loadDishes,loadProfile,loadCategories, loadSideDishes } = this.props
    loadDishes()
    loadSideDishes()
    loadCategories()
    this.setState({ loadedDishes: true });
  }


  render() {
    const {params} = this.props
      return (
        <div>
          <ProductsContainer openModal={this.handleOpenModal} category={params.id} shouldLoad={this.state.loadedDishes}/>
          <ModalContainer isOpen={this.state.showModal} isClose={this.handleCloseModal}/>
        </div>

      )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadDishes,loadProfile, loadSideDishes, loadCategories }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer)
