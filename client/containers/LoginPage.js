import React, { PropTypes } from 'react';
import TextInput from '../components/common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionCreators from '../actions/sessionCreators';
import Header from './Header';
import { Link } from 'react-router';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }


  render() {
    return (
      <div>
        <h3>Login Page</h3>

        <form id="loginForm">
          <TextInput
             name="email"
             type="email"
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
             value="Login"
             name="Login"
             className="btn btn-primary"
             onClick={this.onSave}/>
        </form>

        <div id="errorDiv"></div>

        <div>
          <Link to="/register" className="btn btn-link">Don't have an account yet?</Link>
        </div>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
