import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class FrontPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

   render() {

     return (
       <div>
         <p>Välkommen till Foodfixers</p>
         <Link className="btn main-btn" to="/categories">Börja här</Link>
       </div>
     )
   }
}


export default FrontPage
