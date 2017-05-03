import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      {touched && error && <p className="error-text">{error}</p>}
      <input className="form-input" {...input} placeholder={label} type={type}/>

    </div>
  </div>
)

const SubmitRegisterForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, register } = props
  return (
    <form className="ReduxForm" onSubmit={handleSubmit(register)}>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <div>
        <button className="btn main-btn" type="submit" disabled={submitting}>Register</button>
      </div>
      <Link className="loginToRegBtn" to="/login">Already registered?</Link>
    </form>
  )
}

export default reduxForm({
  form: 'registerForm'  // a unique identifier for this form
})(SubmitRegisterForm)
