import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleCategories } from '../reducers/categories'
import { loadCategories } from '../actions/productActions'
import { loadProfile } from '../actions/profileActions'
import { loadAccount } from '../actions/sessionActions'
import Category from '../components/Category'

class CategoriesContainer extends Component {

  componentWillMount() {
    const { loadCategories } = this.props
    loadCategories()
  }

  render() {
    const { categories } = this.props

      return (
        <div>
          <div className="product-intro">
            <h4>Kategorier</h4>
            <p>Välj kategorin du är intresserad av</p>
          </div>
          <div className="categories-container">
            {categories.map(cat =>
              <Category
                key={cat.id}
                category={cat}
                image={cat.image_url}/>
            )}
          </div>
        </div>

      )
  }
}


const mapStateToProps = state => ({
  categories: getVisibleCategories(state.categories)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadCategories, loadProfile, loadAccount}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer)
