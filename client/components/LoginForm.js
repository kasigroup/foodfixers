import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, login } = props
  return (
    <form onSubmit={handleSubmit(login)}>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <Link to="/register">Register new account?</Link>
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(SubmitValidationForm)
