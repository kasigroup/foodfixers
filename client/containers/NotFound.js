import React, {Component} from 'react';


class NotFound extends Component {
  constructor () {
    super();

  }


  render () {
    const { isOpen, isClose, location } = this.props
    return (
      <div>
        <h2><b>{location.pathname}</b> is Not Found</h2>
      </div>
    );
  }
}


export default NotFound
