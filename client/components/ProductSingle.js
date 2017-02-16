import React from 'react';
import Product from './Product';
import * as accompanimentActions from '../actions/accompanimentActions';

class ProductSingle extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    // Get params id
    const { id } = this.props.params;
    // params id from string to int
    const paramsId = parseInt(id)
    // Find index in array and give back the one with the same id as params
    const index = this.props.accompaniments.findIndex((accompaniment) => accompaniment.id === paramsId);
    // Return the meal with the right id
    const accompaniment = this.props.accompaniments[index];


    return (
      <div>
        <Product i={index} accompaniment={accompaniment} {...this.props} />
      </div>
    )
  }
}

export default ProductSingle;
