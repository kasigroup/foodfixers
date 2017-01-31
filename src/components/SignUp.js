import React from 'react';
import { Link } from 'react-router';

const SignUp = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <form action="/" onSubmit={onSubmit}>
      <h3>Sign Up</h3>
      {errors.summary && <p>{errors.summary}</p>}
      <input value={user.email} onChange={onChange}  type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required></input>
      <input value={user.password} onChange={onChange}  type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
);

SignUp.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired
};

export default SignUp;
