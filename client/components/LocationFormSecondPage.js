import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {FormattedDate} from 'react-intl';

let LocationFormFirstPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, previousPage, deliveries, areaValue } = props

  const required = value => value ? undefined : 'Required'

  let locationValueInt = parseInt(areaValue)

  function renderField({ input, label, type, meta: { touched, error } }) {
    if (locationValueInt === label.location.area_id) {
      return (
        <div className="form-check" >
          <input {...input} className="form-check-input locationFormInput" id={label.id} placeholder={label} type={type}/>
          <label className="form-check-label location-form-label" htmlFor={label.id}>
          {<FormattedDate value={label.delivery_at}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long' />}</label>
          {touched && error && <p className="error-text">{error}</p>}
        </div>
      )
    }else {
      return null
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
          <p className="align-center">Choose date</p>
          {deliveries.map((item, i) => <div key={i}>
            <Field
              name="day"
              component={renderField}
              type="radio"
              label={item}
              value={`${item.id}`}
              validate={[ required ]}/>
          </div>)}
        </div>
        <div>
          <button type="button" className="previous btn main-btn btn-45" onClick={previousPage}>Previous</button>
          <button type="submit" disabled={pristine || submitting } className="next btn main-btn btn-45">Next</button>
        </div>
      </fieldset>
    </form>
  )
}

LocationFormFirstPage = reduxForm({
  form: 'location',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(LocationFormFirstPage)

// Decorate with connect to read form values
const selector = formValueSelector('location') // <-- same as form name
LocationFormFirstPage = connect(
  state => {
    // can select values individually
    const areaValue = selector(state, 'area')
    return {
      areaValue
    }
  }
)(LocationFormFirstPage)


export default LocationFormFirstPage
