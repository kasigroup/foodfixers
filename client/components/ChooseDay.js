import React from 'react';

class ChooseDay extends React.Component {
  render() {
      const { item, i } = this.props;

    return (
      <option value={item.name}>{item.name} {`Day: ${i + 1}`}</option>
    )
  }
}


export default ChooseDay;
