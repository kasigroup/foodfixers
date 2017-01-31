import React from 'react';
import { Link } from 'react-router'



class StoreFront extends React.Component {


  render() {
    return (
      <div className="store-front">
        <div className="start-btn">
          <Link to="/signup"><button className="btn btn-primary">Get started</button></Link>
        </div>
      </div>
    )
  }
}

StoreFront.contextTypes = {
  router: React.PropTypes.object
}


export default StoreFront;
