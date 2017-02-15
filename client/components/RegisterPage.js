import React, { PropTypes } from 'react';
import TextInput from './common/TextInput';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionCreators from '../actions/sessionCreators';
import Header from './Header';


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {account: {email: '', password: '', password_confirmation: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);

  }

  onChange(event) {
    const field = event.target.name;
    const account = this.state.account;
    account[field] = event.target.value;
    return this.setState({account: account});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.RegisterUser(this.state.account);
  }


  render() {
    return (
      <div>
        <Header />
        <h3>Register Page</h3>
        <form>
          <TextInput
             name="email"
             type="email"
             label="email"
             value={this.state.account.email}
             onChange={this.onChange}/>

          <TextInput
               name="password"
               label="password"
               type="password"
               value={this.state.account.password}
               onChange={this.onChange}/>

          <TextInput
                name="password_confirmation"
                label="Repeat Password"
                type="password"
                value={this.state.account.password_confirmation}
                onChange={this.onChange}/>

          <input
               type="submit"
               value="Register"
               name="Login"
               className="btn btn-primary"
               onClick={this.onSave}/>



        </form>

        <div>
          <Link to="/login" className="btn btn-link">Already registered?</Link>
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

export default connect(null, mapDispatchToProps)(RegisterPage);
