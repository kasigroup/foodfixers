import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import LocationFormFirstPage from './LocationFormFirstPage'
import LocationFormSecondPage from './LocationFormSecondPage'
import LocationFormThirdPage from './LocationFormThirdPage'
import moment from 'moment';
import dateArray from 'moment-array-dates';

class LocationForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }

  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  componentDidMount() {

    const {deliveries, location} = this.props

    let choosenDelivery = deliveries.find(function(cat){
      if (cat.id === location) {
        return true
      }else {
        return false
      }
    })

  }

  render() {
    const { onSubmit, notif, areas, deliveries, location, days } = this.props
    const { page } = this.state
    moment.locale('sv')

    // Getting choosen address
    let address = null;
    if (location === 0) {
       address = <span>none</span>;
    } else {
      let gettingDelivery = deliveries.find(function(del){
        if (del.id === parseInt(location)) {
          return true
        }else {
          return false
        }
      })
      address = <span>{gettingDelivery.location.street_address}</span>
    }



    return (<div>
      <h5>Choosen Location: {address}</h5>
      {page === 1 && <LocationFormFirstPage areas={areas} onSubmit={this.nextPage}/>}
      {page === 2 && <LocationFormSecondPage deliveries={deliveries} days={days} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      {page === 3 && <LocationFormThirdPage deliveries={deliveries} previousPage={this.previousPage} notif={notif} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

export default LocationForm


// // Converting date to an date object and then back to string
// let convertedDates = deliveries.map(function(item) {
//   let newArray = {...item}
//   newArray.delivery_at = new Date(item.delivery_at)
//   newArray.delivery_at = newArray.delivery_at.toString()
//   return newArray
// });
