import React, {Component} from 'react';
import ReactModal from 'react-modal';
import SideDishesContainer from './SideDishesContainer'
import { Link } from 'react-router'

class ModalContainer extends Component {

  constructor () {
    super();
    this.state = {
      showModal: false
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

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="Modal"
          overlayClassName="ModalOverlay"
        >
          <SideDishesContainer />
          <button className="btn main-btn btn-45" onClick={this.handleCloseModal}>Order more</button>
          <Link className="btn main-btn btn-45 float-right" to="/cart">Cart</Link>
        </ReactModal>
      </div>
    );
  }
}


export default ModalContainer
