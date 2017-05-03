import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import LocationFormFirstPage from './LocationFormFirstPage'
import LocationFormSecondPage from './LocationFormSecondPage'
import LocationFormThirdPage from './LocationFormThirdPage'

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

  render() {
    const { onSubmit } = this.props
    const { deliveries } = this.props
    // // Converting date to an date object and then back to string
    // let convertedDates = deliveries.map(function(item) {
    //   let newArray = {...item}
    //   newArray.delivery_at = new Date(item.delivery_at)
    //   newArray.delivery_at = newArray.delivery_at.toString()
    //   return newArray
    // });
    const { areas } = this.props
    const { page } = this.state
    return (<div>
      {page === 1 && <LocationFormFirstPage areas={areas} onSubmit={this.nextPage}/>}
      {page === 2 && <LocationFormSecondPage deliveries={deliveries} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      {page === 3 && <LocationFormThirdPage deliveries={deliveries} previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

export default LocationForm
