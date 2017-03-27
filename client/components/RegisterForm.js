import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <p className="error-text">{error}</p>}
    </div>
  </div>
)

const SubmitRegisterForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, register } = props
  return (
    <form onSubmit={handleSubmit(register)}>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <p><Link to="/login">Already registered?</Link></p>
      <div>
        <button type="submit" disabled={submitting}>Register</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'registerForm'  // a unique identifier for this form
})(SubmitRegisterForm)
