import React, {Component} from 'react';
import ReactModal from 'react-modal';
import SideDishesContainer from './SideDishesContainer'
import { Link } from 'react-router'

class ModalContainer extends Component {
  constructor () {
    super();

  }


  render () {
    const { isOpen, isClose } = this.props
    return (
      <div>
        <ReactModal
          isOpen={isOpen}
          contentLabel="Minimal Modal Example"
          onRequestClose={isClose}
          shouldCloseOnOverlayClick={true}
          className="Modal"
          overlayClassName="ModalOverlay"
        >
          <span className="modal-close-icon float-right" onClick={isClose}><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
          <SideDishesContainer />
          <button className="btn main-btn btn-45" onClick={isClose}>Order more</button>
          <Link className="btn main-btn btn-45 float-right" to="/cart">Cart</Link>
        </ReactModal>
      </div>
    );
  }
}


export default ModalContainer
