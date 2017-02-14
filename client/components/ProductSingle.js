import React from 'react'
import Product from './Product';

class ProductSingle extends React.Component {
  render() {

    const i = 1;
    // get us the post
    const accompaniment = this.props.accompaniments[i];


    return (
      <div>
        <Product i={i} accompaniment={accompaniment} {...this.props} />
      </div>
    )
  }
}

export default ProductSingle;
