import React, {Component} from 'react';
import ConditionReport from './ConditionReport';
import logo from '../assets/logo.svg';

// class Home extends Component {
//   // constructor() {
//   //
//   // }
//   render() {
//     return (
//
//     );
//   }
// }

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conditionsArray: this.props.conditions
    }
  }

  render() {
    let conditionsArray = this.state.conditionsArray

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ConditionReport swellHeightMin={conditionsArray.swell.minBreakingHeight}
          swellHeightMax={conditionsArray.swell.maxBreakingHeight}
          swellUnit={conditionsArray.swell.unit}
          swellDirection={conditionsArray.swell.components.combined.compassDirection}
          windSpeed={conditionsArray.wind.speed}
          windDirection={conditionsArray.wind.compassDirection}
          windUnit={conditionsArray.wind.unit}
          temperature={conditionsArray.condition.temperature}
          temperatureUnit={conditionsArray.condition.unit}
        />
      </div>
    );
  }
}

export default Home;
