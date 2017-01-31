import React from 'react';
import LogIn from './LogIn';

class LogInPage extends React.Component {

  constructor(props) {
    super(props);

    // set state
    this.state = {
        errors: {},
        user: {
          email: '',
          password: ''
        }
      };

      this.processForm = this.processForm.bind(this);
      this.changeUser = this.changeUser.bind(this);
    }

  // Change user object
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event) {
    // prevent default action
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }

  render() {
    return (
      <LogIn
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }
}

LogInPage.contextTypes = {
  router: React.PropTypes.object
}

export default LogInPage;
