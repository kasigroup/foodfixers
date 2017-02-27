import React from 'react';
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
      const i = this.props.dishes[index].id;

      return (
        <div className="single-product">
          <img className="" src="http://placehold.it/500x300" alt="Card image cap"></img>
          <h2>{dish.name}</h2>
          <p>{dish.price}kr</p>
          <p>{dish.description}</p>
          <button className="btn btn-primary" onClick={() => this.props.addToOrder(i, dish)}>Add to cart</button>
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
