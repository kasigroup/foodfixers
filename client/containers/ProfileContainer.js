import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const ProfileContainer = ({profile, orders}) => (
  <div>
    <h3>Profile</h3>
    <p>Name: {profile.first_name} <span/> {profile.last_name}</p>
    <h3>Orders</h3>
    {orders.map((item, i) =>  <p key={i}>id: {item.id} Price: {item.price}kr</p>)}
  </div>
)


const mapStateToProps = state => ({
  profile: state.profile_data.profile,
  orders: state.profile_data.orders
})

export default connect(
  mapStateToProps
)(ProfileContainer)
