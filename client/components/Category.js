import React, { Component } from 'react'
import { Link } from 'react-router'

class Category extends Component {

  render() {
    const {category} = this.props
    return (
      <Link to={`/category/${category.id}`}><div className="category-box">
        {category.name}
      </div></Link>
    )
  }
}

export default Category
