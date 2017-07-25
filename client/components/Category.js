import React, { Component } from 'react'
import { Link } from 'react-router'
import { baseUrl } from '../globalFunctions/helpers';

class Category extends Component {

  render() {
    const {category, image} = this.props
    const imageBg = {
          backgroundImage: `url('${baseUrl}${image}')`
    }
    return (
      <Link to={`/category/${category.id}`}><div className="category-box" style={imageBg}>
        <p>{category.name}</p>
      </div></Link>
    )
  }
}

export default Category
