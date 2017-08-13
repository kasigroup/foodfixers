import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {FormattedDate} from 'react-intl';

let LocationFormFirstPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, previousPage, deliveries, areaValue, days } = props

  const required = value => value ? undefined : 'Required'
  let areaValueInt = parseInt(areaValue)
  console.log(areaValueInt)

  function renderField({ input, label,id, type, meta: { touched, error } }) {
    if (areaValueInt === label.area_id) {
      return (
        <div className="form-check" ><input {...input} className="form-check-input locationFormInput" id={id} placeholder={label} type={type}/>
          <label className="form-check-label location-form-label" htmlFor={id} >
            {label.date}</label>
            {touched && error && <p className="error-text">{error}</p>}
        </div>
      )
    }
    else {
      return null
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
          <p className="align-center">Välj datum som maten ska köras ut på och klicka på nästa</p>
          <p className="align-center">Här visas datum vi kör till inom 5 dagar </p>
          {days.map((item, i) => <div key={i}>
            <Field
              name="day"
              id={i}
              type="radio"
              value={item.date}
              component={renderField}
              label={item}
            />
          </div>)}
        </div>
        <div>
          <button type="button" className="previous btn main-btn btn-45" onClick={previousPage}>Bakåt</button>
          <button type="submit" disabled={pristine || submitting } className="next btn main-btn btn-45">Nästa</button>
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
    const dayValue = selector(state, 'day')
    return {
      areaValue,
      dayValue
    }
  }
)(LocationFormFirstPage)


export default LocationFormFirstPage
