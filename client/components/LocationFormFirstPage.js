import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LocationFormFirstPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, areas } = props

  const required = value => value ? undefined : 'Required'

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-check" ><label className="form-check-label">
        <input {...input} className="form-check-input" placeholder={label} type={type}/>
        {label}</label>
        {touched && error && <p className="error-text">{error}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
          <p>Choose area</p>
          {areas.map((item, i) => <div key={i}>
            <Field
              name="area"
              component={renderField}
              label={item.name}
              type="radio"
              value={`${item.id}`}
              validate={[ required ]}/>
          </div>)}
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting} className="next">Next</button>
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
