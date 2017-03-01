import React from 'react';

class ChooseDay extends React.Component {
  render() {
      const { item, i } = this.props;

    return (

        <label className="custom-control custom-radio">
          <input className="custom-control-input" type="radio" name="area" value={item.name}  />
          <span className="custom-control-indicator"></span>
          <span className="custom-control-description">{item.name}</span>
        </label>

      // <option value={item.name}>{item.name} {`Day: ${i + 1}`}</option>
    )
  }
}


export default ChooseDay;
