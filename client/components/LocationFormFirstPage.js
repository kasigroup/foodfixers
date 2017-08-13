import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LocationFormFirstPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, areas } = props

  const required = value => value ? undefined : 'Required'

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-check" ><input {...input} className="form-check-input locationFormInput" id={label.id} placeholder={label} type={type}/>
      <label className="form-check-label location-form-label" htmlFor={label.id} >
        {label.name}</label>
        {touched && error && <p className="error-text">{error}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
          <p className="align-center">Välj ett område nära dig och klicka nästa</p>
          {areas.map((item, i) => <div key={i}>
            <Field
              name="area"
              component={renderField}
              label={item}
              type="radio"
              value={`${item.id}`}
              validate={[ required ]}/>
          </div>)}
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting} className="next btn main-btn btn-45">Nästa</button>
        </div>
      </fieldset>
    </form>
  )
}

export default reduxForm({
  form: 'location',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(LocationFormFirstPage)
