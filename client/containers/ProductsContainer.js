import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'




class ProductsContainer extends Component {

  constructor(props) {
    super(props)
    this.addToTheCart = this.addToTheCart.bind(this);
  }

  addToTheCart(id){
    const { addToCart, openModal } = this.props
    addToCart(id)
    openModal()
  }

  render() {
    const { products, profile, addToCart, openModal } = this.props



      return (
        <div>

          <ProductsList title="Products">
            {products.map(product =>
              <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => this.addToTheCart(product.id)} />
            )}
          </ProductsList>
        </div>

      )
  }
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
