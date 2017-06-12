import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAdminOrders } from '../actions/adminActions'
import { getVisibleProducts } from '../reducers/products'
import Loader from 'react-loader-advanced';
import moment from 'moment';

class AdminContainer extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const date = new Date();
    const weekNum = moment(date, "MM-DD-YYYY").week();;
    console.log(weekNum)
    const { dispatch } = this.props
    var year = "year=2017";
    var week = `week=${weekNum}`;
    dispatch(loadAdminOrders(year,week))
  }

  getOrders(e){
    console.log(e)
    const { dispatch } = this.props
    var year = "year=2017";
    var week = "week=20";
    dispatch(loadAdminOrders(year,week))
  }


   render() {
     const { orders } = this.props
     return (
       <div>
         <h3>Admin</h3>
         <p>Choose week</p>
         {/* <input type="text" onClick={(e) => this.getOrders("hejsan")}>Submit</input> */}
         <div className="admin-orders">
           <div>{orders.map((item, i) =>
             <div className="admin-order" key={i}>
               <p>account: {item.account_id}</p>
               <p>id: {item.id} Price: {item.total}kr</p>
             </div>)}
           </div>
         </div>
       </div>
     )
   }
}

const mapStateToProps = state => ({
  orders: state.admin.orders
})

export default connect(
  mapStateToProps
)(AdminContainer)
