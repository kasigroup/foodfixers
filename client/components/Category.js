import React, { Component } from 'react'
import { Link } from 'react-router'

class Category extends Component {

  render() {
    const {category, image} = this.props
    const imageBg = {
          backgroundImage: `url('https://foodfixers-api.iskall.io${image}')`
    }
    return (
      <Link to={`/category/${category.id}`}><div className="category-box" style={imageBg}>
        <p>{category.name}</p>
      </div></Link>
    )
  }
}

export default Category
