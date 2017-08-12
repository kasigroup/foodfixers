import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input className="form-input" {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, login, email } = props
  return (
      <form className="ReduxForm" onSubmit={handleSubmit(login)}>
        <Field name="email" type="text" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Lösenord"/>
        {error && <strong>{error}</strong>}
        <div>
          <button className="btn main-btn" type="submit" disabled={submitting}>Logga in</button>
        </div>
        <Link className="loginToRegBtn" to="/register">Registrera nytt konto</Link>
      </form>
  )
}

export default reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(SubmitValidationForm)
