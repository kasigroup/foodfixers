import React from 'react';

class Login extends React.Component {

  constructor() {
    super();
    this.checkLogIn = this.checkLogIn.bind(this);
  }

  checkLogIn(event) {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    if (email === "admin@admin.se" && password === "admin") {
      this.context.router.transitionTo(`/app`);
    } else {
      console.log("Hehe, wrong password");
    }

  }

  render() {
    return (
        <form onSubmit={this.checkLogIn.bind(this)}>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" ref={(input) => { this.emailInput = input}} required></input>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref={(input) => { this.passwordInput = input}} required></input>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
        </form>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
