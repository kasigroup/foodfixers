import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAdminOrders } from '../actions/adminActions'
import { getVisibleProducts } from '../reducers/products'
import Loader from 'react-loader-advanced';
import moment from 'moment';

class AdminContainer extends Component {
  constructor(props) {
    super(props)

    this.nextAndPrevWeek = this.nextAndPrevWeek.bind(this);
    this.setCooked = this.setCooked.bind(this);
    this.setDevlivered = this.setDevlivered.bind(this);

    this.state = {
      week:0,
      year:0,
      orderState:"none"
    };
  }

  componentDidMount() {
    const date = new Date();
    const weekNum = moment(date, "MM-DD-YYYY").week();
    const yearNum = moment(date, "MM-DD-YYYY").year();
    // Set week and year to state
    this.settingState(weekNum,yearNum)

    const { dispatch } = this.props
    var year = `year=${yearNum}`;
    var week = `week=${weekNum}`;
    dispatch(loadAdminOrders(year,week))
  }

  nextAndPrevWeek(e){
    // +(-1) to state when prev and +1 when next
    this.setState({
      week: this.state.week + e
    }, () => this.getOrders());
  }

  settingState(week,year){
    this.setState({
      week: week,
      year: year
    });
  }

  getOrders(){
    const { dispatch } = this.props
    var year = `year=${this.state.year}`;
    var week = `week=${this.state.week}`;
    dispatch(loadAdminOrders(year,week))
  }

  setCooked(e){
    console.log("cooked")
    var parentDiv = e.target.parentNode;
    parentDiv.classList.toggle("cooked");
    this.setState({
      orderState: "cooked"
    });
  }

  setDevlivered(e){
    console.log("delivered")
    var parentDiv = e.target.parentNode;
    parentDiv.classList.toggle("delivered");
    this.setState({
      orderState: "delivered"
    });
  }

   render() {
     const { orders } = this.props
     return (
       <div>
         <h3>Admin</h3>
         <p>Week: {this.state.week}</p>

         <button className="btn main-btn btn-normal" onClick={() => this.nextAndPrevWeek(-1)}>Bakåt</button>
         <button className="btn main-btn btn-normal" onClick={() => this.nextAndPrevWeek(1)}>Framåt</button>

         <div className="admin-orders">
           <div>{orders.map((item, i) =>
             <div className="admin-order" id="admin-order-id" key={i}>
               <p>Name: {item.profile_full_name}</p>
               <p>id: {item.id} Price: {item.total}kr</p>
                 <div className="admin-order-dishes" >
                 {item.items.map((dish, i) =>
                   <div key={i} className="admin-order-dish">
                     <p>{dish.product.name} {dish.quantity}st</p>
                   </div>
                 )}
                 </div>
                 <button className="btn main-btn btn-normal" onClick={(e) => this.setCooked(e)}>Lagad</button>
                 <button className="btn main-btn btn-normal" onClick={(e) => this.setDevlivered(e)}>Utgiven</button>
             </div>)}
           </div>
         </div>
       </div>
     )
   }
}

const mapStateToProps = (state) => ({
  orders: state.admin.orders
})

export default connect(
  mapStateToProps
)(AdminContainer)
