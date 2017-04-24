import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import LocationFormFirstPage from './LocationFormFirstPage'
import LocationFormSecondPage from './LocationFormSecondPage'

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
    const { areas } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <LocationFormFirstPage areas={areas} onSubmit={this.nextPage}/>}
        {page === 2 && <LocationFormSecondPage  deliveries={deliveries} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      </div>
    )
  }
}

export default LocationForm
