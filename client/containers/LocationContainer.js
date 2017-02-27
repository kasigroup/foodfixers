import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChooseDay from "../components/ChooseDay";
import * as deliveriesActions from '../actions/deliveriesActions';



class LocationContainer extends React.Component {

  constructor(props) {
   super(props);
   this.state = {area: 'nothing'};

   this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    console.log("loading")
    const areasUrl = "areas";
    this.props.loadDeliveries(areasUrl);
  }

  handleChange(event) {
   this.setState({area: event.target.value});
   console.log(event.target.value);
 }

  render() {
    return (
      <div>
        <label className="mr-sm-2">
          Pick your area:
          <select className="custom-select mb-2 mr-sm-2 mb-sm-0" value={this.state.value} onChange={this.handleChange}>
            <option defaultValue="" disabled>Choose...</option>
            {this.props.deliveries.map((item, i) =>  <ChooseDay key={i} i={i} item={item}/>)}
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
