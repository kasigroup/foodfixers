import React from 'react';
import { Link } from 'react-router';


class ProfilePage extends React.Component {

  constructor(props) {
   super(props);
  }


  render() {
    return (
      <div className="cards">
          <p>Profile Page</p>
          <span>First name: {this.props.profile.first_name}</span>
          <br/>
          <span>Last name: {this.props.profile.last_name}</span>
      </div>
    )
  }
}



export default ProfilePage;
