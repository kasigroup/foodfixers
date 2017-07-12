import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAdminOrders } from '../actions/adminActions'
import { getVisibleProducts } from '../reducers/products'
import Loader from 'react-loader-advanced';
import moment from 'moment';
import AdminOrders from '../components/AdminOrders'

class AdminContainer extends Component {
  constructor(props) {
    super(props)

    this.nextAndPrevWeek = this.nextAndPrevWeek.bind(this);
    this.setCooked = this.setCooked.bind(this);
    this.setDevlivered = this.setDevlivered.bind(this);
    this.setDay = this.setDay.bind(this);


    this.state = {
      week:0,
      year:0,
      day:"undefined",
      orderState:"none"
    };
  }

  componentDidMount() {
    const date = new Date();
    const weekNum = moment(date, "MM-DD-YYYY").week();
    const yearNum = moment(date, "MM-DD-YYYY").year();
    const weekDates = moment().week(weekNum).days(1);


    var weekdays = [];
    for (var i = 1; i <= 7; i++) {
      var theDate = moment().week(27).days(i).toDate();
      weekdays.push(theDate);
    }

    // Set week and year to state
    this.settingState(weekNum,yearNum)
    console.log(weekdays)
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

  setDay(event){
    this.setState({day: event.target.value});
  }

  getOrders(){
    const { dispatch } = this.props
    var year = `year=${this.state.year}`;
    var week = `week=${this.state.week}`;
    dispatch(loadAdminOrders(year,week))
  }

  setCooked(e){
    var parentDiv = e.target.parentNode;
    parentDiv.classList.toggle("cooked");
    this.setState({
      orderState: "cooked"
    });
  }

  setDevlivered(e){
    var parentDiv = e.target.parentNode;
    parentDiv.classList.toggle("delivered");
    this.setState({
      orderState: "delivered"
    });
  }

   render() {
     const { orders } = this.props
     const theDay = this.state.day
     const theDayInt = parseInt(theDay)

     var formattedOrders = orders.reduce((sum, item) => {
          item.delivery.delivery_at = new Date(item.delivery.delivery_at);
          item['weekday'] = item.delivery.delivery_at.getDay();
          sum.push(item);
          return sum;
      }, []);

      if (this.state.day != "undefined") {
        console.log("fiilter")
        formattedOrders = formattedOrders.filter(function(order){
          return order.weekday === theDayInt;
        })
      }

      console.log(formattedOrders)

     return (
       <div>
         <h3>Admin</h3>
         <p>Week: {this.state.week}</p>
         <div className="admin-colors">
           <div className="admin-color-1"></div>
           <span>= Lagad</span>
           <div className="admin-color-2"></div>
           <span>= Levererad</span>
         </div>

         <div className="admin-buttons">
           <button className="btn main-btn btn-normal" onClick={() => this.nextAndPrevWeek(-1)}>Bakåt</button>
           <button className="btn main-btn btn-normal" onClick={() => this.nextAndPrevWeek(1)}>Framåt</button>
         </div>

         <select className="adminDayPicker" value={this.state.day} onChange={this.setDay}>
          <option defaultValue value="undefined">Alla</option>
          <option value={1}>Måndag</option>
          <option value={2}>Tisdag</option>
          <option value={3}>Onsdag</option>
          <option value={4}>Torsdag</option>
          <option value={5}>Fredag</option>
          <option value={6}>Lördag</option>
          <option value={0}>Söndag</option>
        </select>

         <div className="admin-orders">
           <AdminOrders orders={formattedOrders}/>
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
