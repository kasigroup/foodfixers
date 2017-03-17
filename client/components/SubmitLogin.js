import { SubmissionError } from 'redux-form'
import { logInUser } from '../actions/sessionActions'
import { connect } from 'react-redux'

function submit({ values, logInUser}) {
  logInUser(values);
  console.log(values)
}

export default connect(
  null, { logInUser }
)(submit)
