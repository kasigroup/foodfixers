import React, { Component } from 'react';

class CategoryName extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    const { name, catChoosen, catId } = this.props
    if (catId === catChoosen) {
      return <p>{name}</p>
    }else {
      return null;
    }

  }


}


export default CategoryName
