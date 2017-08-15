import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/css/App.css';
import conditions from './data/conditions';
import ConditionReport from './components/ConditionReport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ConditionReport swellHeightMin={conditions.swell.minBreakingHeight}
          swellHeightMax={conditions.swell.maxBreakingHeight}
          swellUnit={conditions.swell.unit}
          swellDirection={conditions.swell.components.combined.compassDirection}
          windSpeed={conditions.wind.speed}
          windDirection={conditions.wind.compassDirection}
          windUnit={conditions.wind.unit}
          temperature={conditions.condition.temperature}
          temperatureUnit={conditions.condition.unit}
        />
      </div>
    );
  }
}

export default App;
