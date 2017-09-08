import React, { PropTypes, Component } from 'react'


class AdminOrders extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    const {orders} = this.props;
    return (
      <div>{orders.map((item, i) =>
        <div className="admin-order" id="admin-order-id" key={i}>
          <p>Adress: {item.delivery.location.street_address}</p>
          <p>Tid: {item.time} {item.day}</p>
          <p>Namn: {item.profile_full_name}</p>
          <p>id: {item.id} Pris: {item.total}kr</p>
            <div className="admin-order-dishes" >
            {item.items.map((dish, i) =>
              <div key={i} className="admin-order-dish">
                <p>{dish.product.name} {dish.quantity}st</p>
              </div>
            )}
            </div>
            <button className="btn main-btn btn-normal" onClick={(e) => this.setCooked(e)}>Lagad</button>
            <button className="btn main-btn btn-normal" onClick={(e) => this.setDevlivered(e)}>Levererad</button>
        </div>)}
      </div>
    )
  }
}
export default AdminOrders
