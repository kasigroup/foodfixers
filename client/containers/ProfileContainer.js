import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadProfile,loadOrders } from '../actions/profileActions'


class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log("Loading Profile")
    dispatch(loadProfile())
    dispatch(loadOrders())
  }

   render() {
     const { profile, orders } = this.props
     return (
       <div>
         <h3>Profile</h3>
         <p>Name: {profile.first_name} <span/> {profile.last_name}</p>
         <h3>Orders</h3>
         {orders.map((item, i) =>  <p key={i}>id: {item.id} Price: {item.price}kr</p>)}
       </div>
     )
   }
}

// const ProfileContainer = ({profile, orders}) => {
//
//   return (
//     <div>
//       <h3>Profile</h3>
//       <p>Name: {profile.first_name} <span/> {profile.last_name}</p>
//       <h3>Orders</h3>
//       {orders.map((item, i) =>  <p key={i}>id: {item.id} Price: {item.price}kr</p>)}
//     </div>
//   )
// }


const mapStateToProps = state => ({
  profile: state.profile_data.profile,
  orders: state.profile_data.orders
})

export default connect(
  mapStateToProps
)(ProfileContainer)
