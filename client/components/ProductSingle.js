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
        <div className="single-product">
          <img className="" src="http://placehold.it/500x300" alt="Card image cap"></img>
          <h2>{dish.name}</h2>
          <p>{dish.price}kr</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
