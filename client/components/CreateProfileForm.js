import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitCreateProfileForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, create } = props
  return (
    <form onSubmit={handleSubmit(create)}>
      <Field name="first_name" type="text" component={renderField} label="First Name"/>
      <Field name="last_name" type="text" component={renderField} label="Last Name"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Save Profile</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'CreateProfileForm'  // a unique identifier for this form
})(SubmitCreateProfileForm)
