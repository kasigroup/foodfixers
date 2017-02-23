import React, { PropTypes } from 'react';
import TextInput from './common/TextInput';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';
import Header from './Header';


class CreateProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {profile: {first_name: '', last_name: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const profile = this.state.profile;
    profile[field] = event.target.value;
    return this.setState({profile: profile});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.createProfile(this.state.profile);
  }

  render() {
    return (
      <div>
        <h3>Create Profile Page</h3>

        <form>
          <TextInput
             name="first_name"
             type="text"
             label="First Name"
             value={this.state.profile.first_name}
             onChange={this.onChange}/>

          <TextInput
              name="last_name"
              type="text"
              label="Last Name"
              value={this.state.profile.last_name}
              onChange={this.onChange}/>

          <input
              type="submit"
              value="Submit"
              name="Login"
              className="btn btn-primary"
              onClick={this.onSave}/>

        </form>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CreateProfilePage);
