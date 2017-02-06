import React, { PropTypes } from 'react';
import TextInput from './common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const theURL = "api.kasigroup.se/v1/accompaniments";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getRequest = this.getRequest.bind(this);

  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.logInUser(this.state.credentials);
  }



  getRequest(theURL)
  {
      event.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.open("GET", theURL, false);
      xhr.send();

      console.log(xhr.status);
      console.log(xhr.statusText);
      console.log("get get")
      console.log(this.state);
  }


  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <TextInput
             name="email"
             label="email"
             value={this.state.credentials.email}
             onChange={this.onChange}/>

           <TextInput
             name="password"
             label="password"
             type="password"
             value={this.state.credentials.password}
             onChange={this.onChange}/>

           <input
             type="submit"
             className="btn btn-primary"
             onClick={this.onSave}/>
        </form>

        <button onClick={this.getRequest}>Get Request</button>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
