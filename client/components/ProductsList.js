import React, { PropTypes } from 'react'

const ProductsList = ({ title, children }) => (
  <div>  
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
