import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getVisibleDeliveries } from '../reducers/deliveries'
import { getVisibleAreas } from '../reducers/areas'
import Location from '../components/Location'
import { saveLocation } from '../actions/cartActions'




class LocationContainer extends Component {

  constructor(props) {
    super(props)
    this.show = this.show.bind(this);
  }

  show(values){
    const { saveLocation } = this.props
    console.log(values)
    saveLocation(values)
  }

  render() {
      const { deliveries, areas } = this.props
      return (
        <Location
          deliveries={deliveries}
          areas={areas}
          showResults={this.show}
          >
        </Location>
      )
  }

}


const mapStateToProps = state => ({
  form: state.form.location,
  deliveries: getVisibleDeliveries(state.deliveries),
  areas: getVisibleAreas(state.areas)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveLocation }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationContainer)
