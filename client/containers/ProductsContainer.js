import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import CreateProfile from '../components/CreateProfile'
import { loadDishes } from '../actions/productActions'
import { loadProfile } from '../actions/profileActions'


class ProductsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { loadDishes,loadProfile } = this.props
    loadDishes()
    loadProfile()
  }

  render() {
    const { products, profile, addToCart } = this.props
    if (!profile.first_name) {
      return (
        <CreateProfile />
      )
    }else {
      return (
        <ProductsList title="Products">
          {products.map(product =>
              <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)} />
          )}
        </ProductsList>
      )
    }

  }
}

// const ProductsContainer = ({ products, addToCart }) => (
//   <ProductsList title="Products">
//     {products.map(product =>
//         <ProductItem
//           key={product.id}
//           product={product}
//           onAddToCartClicked={() => addToCart(product.id)} />
//     )}
//   </ProductsList>
// )

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart,loadDishes,loadProfile }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
