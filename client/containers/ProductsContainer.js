import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import { loadDishes } from '../actions/productActions'


class ProductsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadDishes } = this.props
    loadDishes()
  }

  render() {
    const { products, addToCart } = this.props
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
  products: getVisibleProducts(state.products)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart,loadDishes }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
