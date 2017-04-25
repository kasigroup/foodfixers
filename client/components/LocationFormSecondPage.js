import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

let LocationFormFirstPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, previousPage, deliveries, locationValue } = props

  const required = value => value ? undefined : 'Required'

  console.log("Area choosen: " + locationValue)

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-check" ><label className="form-check-label">
        <input {...input} className="form-check-input" placeholder={label} type={type}/>
        {label.location.street_address}, <br/> {label.delivery_at}</label>
        {touched && error && <p className="error-text">{error}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
            {deliveries.map((item, i) => <div key={i}>
              <Field
                name="location"
                component={renderField}
                type="radio"
                label={item}
                value={`${item.id}`}
                validate={[ required ]}/>
              </div>)}
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>Previous</button>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
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
    const locationValue = selector(state, 'area')
    return {
      locationValue
    }
  }
)(LocationFormFirstPage)


export default LocationFormFirstPage
