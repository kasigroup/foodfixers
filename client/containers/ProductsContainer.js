import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions/productActions'
import { addNotification } from '../actions/notificationActions'
import { getVisibleCategories } from '../reducers/categories'
import { loadDishes, loadSideDishes, loadCategories } from '../actions/productActions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import CategoryName from '../components/CategoryName'




class ProductsContainer extends Component {

  constructor(props) {
    super(props)
    this.addToTheCart = this.addToTheCart.bind(this);
    this.filterArray = this.filterArray.bind(this);

    this.state = {search: "", shouldLoad: false};
  }

  componentWillMount() {
    const { shouldLoad, loadDishes, loadCategories, loadSideDishes, categories, category  } = this.props
    // if (!shouldLoad) {
    //   loadDishes()
    //   loadSideDishes()
    //   loadCategories()
    //
    // }

  }

  componentDidMount() {
    this.setState({ shouldLoad: true });
  }

  filterArray(event){
    this.setState({search: event.target.value});
  }

  addToTheCart(id, name){
    const { addToCart, openModal, addNotification } = this.props
    addToCart(id)
    addNotification(`Added "${name}" to cart`,"success")
    openModal()
  }

  render() {
    const { products, profile, addToCart, openModal, category, categories, shouldLoad } = this.props


    let categoryArray = products;

    if (this.state.search === "") {
      categoryArray = products.filter(function(product){
        return product.category_id === parseInt(category);
      })
    }else{
      categoryArray = products.filter(function(product){
        return product.category_id === parseInt(category);
      })
      let searchState = this.state.search.toLowerCase();
      let searchArray = categoryArray;
      categoryArray = categoryArray.filter(function(product){
        if (product.description.toLowerCase().includes(searchState) || product.name.toLowerCase().includes(searchState)) {
          return true;
        }
      })
    }


      return (
        <div>
          <div className="product-intro">
            <h4>Meals</h4>
            <p>Our fresh dishes</p>
            {categories.map(cat =>
              <CategoryName key={cat.id} name={cat.name} catId={cat.id} catChoosen={parseInt(category)} />
            )}
            <p>{categoryArray.length} Rätter</p>
            <input className="search-dishes-input" type="text" placeholder="Sök på maträtt tex: 'Vegansk'" onChange={this.filterArray}></input>
          </div>
          <ProductsList title="Products">
            {categoryArray.map(product =>
              <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => this.addToTheCart(product.id, product.name)} />
            )}
          </ProductsList>
        </div>

      )
  }
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  profile: state.profile_data.profile,
  categories: getVisibleCategories(state.categories),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, addNotification, loadDishes, loadSideDishes, loadCategories }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
