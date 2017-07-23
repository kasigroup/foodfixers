import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {FormattedDate} from 'react-intl';
import moment from 'moment'


let LocationFormFirstPage = (props) => {
  const { handleSubmit, pristine, reset, submitting, previousPage, deliveries, areaValue, locationValue, notif, dayValue } = props

  const required = value => value ? undefined : 'Required'

  // let filterDeliveries = deliveries.filter(function(delivery){
  //   return delivery
  // })

  const timeArray = deliveries.map(function(item){
     var date = new Date(item.delivery_at)
     var day = moment(date).format('MM/DD/YYYY dddd');
     var time = moment(date).format('HH:mm');
     return {day: day, time: time, id: item.id, location: item.location};
  });

  console.log("The Day Value")
  console.log(dayValue)
  console.log(areaValue)
  let dayValueInt = parseInt(dayValue)
  let areaValueInt = parseInt(areaValue)

  function renderField({ input, label, type, meta: { touched, error } }) {
    if (dayValue === label.day && areaValueInt === label.location.area_id) {
      return (
        <div className="form-check" >
          <input {...input} className="form-check-input locationFormInput" placeholder={label} id={label.id} type={type}/>
          <label className="form-check-label location-form-label" htmlFor={label.id}>
            {label.location.street_address} - {label.time}
          </label>
          {touched && error && <p className="error-text">{error}</p>}
        </div>
      )
      }
      else {
        return null
      }
  }

  // const renderField = ({ input, label, type, meta: { touched, error } }) => (
  //   <div className="form-check" ><label className="form-check-label">
  //     <input {...input} className="form-check-input" placeholder={label} type={type}/>
  //     {label.location.street_address}, <br/> {<FormattedDate value={label.delivery_at} />}</label>
  //     {touched && error && <p className="error-text">{error}</p>}
  //   </div>
  // )

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group row">
        <div className="col-sm-6 margin-center align-left">
          <p className="align-center">Please choose address</p>
          {timeArray.map((item, i) => <div key={i}>
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
          <button type="button" className="previous btn main-btn btn-45" onClick={previousPage}>Previous</button>
          <button type="submit" className="btn main-btn btn-45" onClick={notif} disabled={pristine || submitting || !dayValue}>Submit</button>
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
    const areaValue = selector(state, 'area')
    const dayValue = selector(state, 'day')
    return {
      areaValue,
      dayValue
    }
  }
)(LocationFormFirstPage)


export default LocationFormFirstPage
