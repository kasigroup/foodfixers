import React from 'react';
import Product from './Product';
import * as accompanimentActions from '../actions/accompanimentActions';

class ProductSingle extends React.Component {

  constructor(props) {
    super(props);

  }




  render() {


    if (this.props.dishes.length > 0) {

      // Get params id
      const { id } = this.props.params;
      // params id from string to int
      const paramsId = parseInt(id)
      // Find index in array and give back the one with the same id as params
      const index = this.props.dishes.findIndex((dish) => dish.id === paramsId);
      // Return the meal with the right id
      const dish = this.props.dishes[index];

      return (
        <div>
          <Product i={index} dish={dish} {...this.props} />
        </div>
      )
    }else {
      return(
        <div>
          <p>Loading...</p>
        </div>
      )
    }
  }
}

export default ProductSingle;
