import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input className="form-input" {...input} placeholder={label} type={type}/>
      {touched && error && <p className="error-text">{error}</p>}
    </div>
  </div>
)


const SubmitCreateProfileForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, create } = props
  return (
    <form className="ReduxForm" onSubmit={handleSubmit(create)}>
      <Field name="first_name" type="text" component={renderField} label="First Name" validate={[ required ]}/>
      <Field name="last_name" type="text" component={renderField} label="Last Name" validate={[ required ]}/>
      <p>Kolla gärna så ditt namn stämmer</p>
      {error && <strong>{error}</strong>}
      <div>
        <button className="btn main-btn" type="submit" disabled={pristine || submitting}>Spara Profil</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'CreateProfileForm'  // a unique identifier for this form
})(SubmitCreateProfileForm)
