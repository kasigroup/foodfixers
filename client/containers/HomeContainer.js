import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProductsContainer from './ProductsContainer'
import SideDishesContainer from './SideDishesContainer'
import { loadDishes, loadSideDishes } from '../actions/productActions'
import { loadProfile } from '../actions/profileActions'
import { addNotification } from '../actions/notificationActions'
import ModalContainer from './ModalContainer'

class HomeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.notif = this.notif.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentWillMount() {
    const { loadDishes,loadProfile, loadSideDishes } = this.props
    loadDishes()
    loadSideDishes()
    loadProfile()
  }

  notif(){
    const { addNotification } = this.props
    addNotification("test", "success", "bc")
  }

  render() {
      return (
        <div>
          <ProductsContainer openModal={this.handleOpenModal} />
          <button onClick={this.notif}>Notif</button>
          <ModalContainer isOpen={this.state.showModal} isClose={this.handleCloseModal}/>
        </div>

      )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadDishes,loadProfile, loadSideDishes, addNotification }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer)
