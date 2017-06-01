import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'


class OrderItem extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    const { item, products } = this.props
    const { items } = item

    var orderProducts = items.map(function(item) {
      const index = products.findIndex(function(product){
        return product.id === item.product_id;
      })

      const product = products[index];
      return product;
    });

    // {console.log(orderProducts.map(function(item){
    //   if (typeof item === 'undefined') {
    //     return null
    //   }else {
    //     return item.name
    //   }
    // }))}

    return (
      <ul className="orderItemList">
        {orderProducts.map(function(item){
          if (typeof item === 'undefined') {
            return null
          }else {
            return <li key={item.id} >{item.name}</li>
          }
        })}
      </ul>
    )
  }
}
export default OrderItem
