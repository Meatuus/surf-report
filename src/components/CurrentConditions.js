import React, {Component} from 'react';
import LocationSwell from './LocationSwell';
import LocationWind from './LocationWind';
import LocationTemperature from './LocationTemperature';

class CurrentConditions extends Component {
  render() {
    let date = (Date.now()/1000);
    let futureConditionsArray = []
    for (var i = 0; i < this.props.conditions.length; i++) {
      if (this.props.conditions[i].timestamp > date) {
        futureConditionsArray.push(this.props.conditions[i])
      }
    }

    const futureConditions = futureConditionsArray.map((item, index) => (
      <div className="App-intro" key={index}>
        <ul>
          <LocationSwell
            swellHeightMin={item.swell.minBreakingHeight}
            swellHeightMax={item.swell.maxBreakingHeight}
            swellUnit={item.swell.unit}
            swellDirection={item.swell.components.combined.compassDirection}
          />
          <LocationWind windSpeed={item.wind.speed}
            windUnit={item.wind.unit}
            windDirection={item.wind.compassDirection}
          />
          <LocationTemperature
            temperature={item.condition.temperature}
            temperatureUnit={item.condition.unit}
          />
        </ul>
      </div>
    ));
    const currentCondition = futureConditions[0]

    return(
      <div>
        <h2>Current Conditions</h2>
        {currentCondition}
      </div>
    );
  }
}

export default CurrentConditions;
