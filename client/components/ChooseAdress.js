import React from 'react';

class ChooseAdress extends React.Component {
  render() {
      const { item, i } = this.props;

    return (
      <option value={item.street_adress}>{item.street_address}</option>
    )
  }
}


export default ChooseAdress;
