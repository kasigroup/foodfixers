import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChooseDay from "../components/ChooseDay";
import ChooseAdress from "../components/ChooseAdress";
import * as deliveriesActions from '../actions/deliveriesActions';



class LocationContainer extends React.Component {

  constructor(props) {
   super(props);
   this.state = {area: '', location: ''};

   this.handleChangeArea = this.handleChangeArea.bind(this);
   this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }

  componentWillMount() {
    console.log("loading")
    const areasUrl = "areas";
    this.props.loadDeliveries(areasUrl);
    const locationsUrl = "locations";
    this.props.loadLocations(locationsUrl);
  }

  handleChangeArea(event) {
   this.setState({area: event.target.value});
   console.log(event.target.value);
 }

 handleChangeLocation(event) {
  this.setState({location: event.target.value});
  console.log(event.target.value);
}

  render() {
    return (
      <div>
        <label className="mr-sm-2">
          Pick your area:
          <select className="custom-select mb-2 mr-sm-2 mb-sm-0" value={this.state.value} onChange={this.handleChangeArea}>
            <option defaultValue="" disabled>Choose...</option>
            {this.props.deliveries.map((item, i) =>  <ChooseDay key={i} i={i} item={item}/>)}
          </select>
        </label>

        <label className="mr-sm-2">
          Pick your adress:
          <select className="custom-select mb-2 mr-sm-2 mb-sm-0" value={this.state.value} onChange={this.handleChangeLocation}>
            <option defaultValue="" disabled>Choose...</option>
            {this.props.locations.map((item, i) =>  <ChooseAdress key={i} i={i} item={item}/>)}
          </select>
        </label>

      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(deliveriesActions, dispatch)
}

export default connect(null, mapDispatchToProps)(LocationContainer);
