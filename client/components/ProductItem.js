import React, { PropTypes, Component } from 'react'
import Product from './Product'
import { Link } from 'react-router'

// const ProductItem = ({ product, onAddToCartClicked }) => (
//   <div className="productItem">
//     <Link to={`product/${product.id}`}>
//       <div className="product-image" style={image}>
//
//       </div>
//       <Product
//         title={product.name}
//       desc={product.description}
//       price={product.price} />
//     </Link>
//     <button
//       className="btn main-btn"
//       onClick={onAddToCartClicked}>Add to cart
//     </button>
//   </div>
// )

class ProductItem extends Component{
  constructor(props) {
    super(props)
  }

  render() {

    const { product, onAddToCartClicked } = this.props

    const image = {
          backgroundImage: `url('http://api.kasigroup.se${product.image_url}')`
    }

    return (
      <div className="productItem">
        <Link to={`product/${product.id}`}>
          <div className="product-image" style={image}>

          </div>
          <Product
            title={product.name}
          desc={product.description}
          price={product.price} />
        </Link>
        <button
          className="btn main-btn"
          onClick={onAddToCartClicked}>Add to cart
        </button>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
