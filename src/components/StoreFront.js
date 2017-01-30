import React from 'react';
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';


class StoreFront extends React.Component {


  render() {
    return (
      <div className="store-front">
        <div className="start-btn">      
          <Link to="/main"><Button bsStyle="primary" bsSize="large">Main</Button></Link>
        </div>
      </div>
    )
  }
}

StoreFront.contextTypes = {
  router: React.PropTypes.object
}


export default StoreFront;
