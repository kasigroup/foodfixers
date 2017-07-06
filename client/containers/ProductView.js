import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductSingle from '../components/ProductSingle'
import ModalContainer from './ModalContainer'
import { addNotification } from '../actions/notificationActions'


class ProductView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.addToTheCart = this.addToTheCart.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);

  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  addToTheCart(id, name){
    const { addToCart,addNotification } = this.props
    addToCart(id)
    addNotification(`Added "${name}" to cart`,"success")
    this.handleOpenModal()
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const { params, products, addToCart } = this.props
      if (products.length > 0) {

        // Get params id
        const { id } = params;
        // params id from string to int
        const paramsId = parseInt(id)
        // Find index in array and give back the one with the same id as params
        const index = products.findIndex((product) => product.id === paramsId);
        // Return the meal with the right id
        const product = products[index];

        const image = {
              backgroundImage: `url('http://foodfixers-api.iskall.io${product.image_url}')`
        };

        if (!product) {
          return (
            <p>No product here!</p>
          )
        }else {
          return (
            <div>
              <ProductSingle
                product={product}
                image={image}
                onAddToCartClicked={() => this.addToTheCart(product.id, product.name)}
              />
              <ModalContainer isOpen={this.state.showModal} isClose={this.handleCloseModal}/>
            </div>
          )
        }
      }else {
        return (
          <p>Loading...</p>
        )
      }
  }
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart, addNotification }
)(ProductView)
