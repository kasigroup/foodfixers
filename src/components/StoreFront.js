import React from 'react';
import { Link } from 'react-router'


class StoreFront extends React.Component {


  render() {
    return (
      <div className="store-front">
        <div className="start-btn">
          <Link to="/main">Main</Link>
        </div>
      </div>
    )
  }
}

StoreFront.contextTypes = {
  router: React.PropTypes.object
}


export default StoreFront;
