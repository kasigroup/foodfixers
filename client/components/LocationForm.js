import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LocationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, locations } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
            {locations.map((item, i) => <div className="form-check" key={i}><label className="form-check-label"><Field name="location" className="form-check-input" component="input" type="radio" value={`${item.id}`}/>{item.street_address}</label></div> )}
        </div>
        <div>
        {/* <button type="submit" disabled={pristine || submitting}>Save choice</button> */}
        </div>
      </fieldset>
    </form>
  )
}

export default reduxForm({
  form: 'location'  // a unique identifier for this form
})(LocationForm)
