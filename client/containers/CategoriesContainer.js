import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleCategories } from '../reducers/categories'
import { loadCategories } from '../actions/productActions'

class CategoriesContainer extends Component {

  componentWillMount() {
    const { loadCategories } = this.props
    loadCategories()
  }

  render() {
    const { categories } = this.props

      return (
        <div>
          <h3>Categories</h3>
          {categories.map(cat =>
            <p
              key={cat.id}>{cat.name}</p>
          )}
        </div>

      )
  }
}


const mapStateToProps = state => ({
  categories: getVisibleCategories(state.categories)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadCategories}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer)
