import React, {Component} from 'react';
import ConditionLocation from '../components/ConditionLocation';
import logo from '../assets/logo.svg';

class Locations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conditionsArray: this.props.conditions
    }
  }

  render() {
    let conditionsArray = this.state.conditionsArray

    let conditionsLocation = conditionsArray.map((item, index) => (
      <ConditionLocation conditions={conditionsArray[index]} key={index} />
    ));

    return (
      <div>
        <h3>Home Page</h3>
        {conditionsLocation}
      </div>
    );
  }
}

export default Locations;
