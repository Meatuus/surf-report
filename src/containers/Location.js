import React, {Component} from 'react';
import LocationSwell from '../components/LocationSwell';
import LocationWind from '../components/LocationWind';
import LocationTemperature from '../components/LocationTemperature';

class Location extends Component {

  render() {
    const locationArray = this.props.conditions;
    const locationEach = locationArray.map((item, index) => (
      <div className="App-intro" key={index}>
        <h1>{item.timestamp}</h1>
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
      </div>
    ));

    return(
      <div>
        {locationEach}
      </div>
    );
  }
}
// const Location = (props) => (
//   <div className="App-intro">
//     <h1>{props.conditions.timestamp}</h1>
//     <LocationSwell
//       swellHeightMin={props.conditions.swell.minBreakingHeight}
//       swellHeightMax={props.conditions.swell.maxBreakingHeight}
//       swellUnit={props.conditions.swell.unit}
//       swellDirection={props.conditions.swell.components.combined.compassDirection}
//     />
//     <LocationWind windSpeed={props.conditions.wind.speed}
//       windUnit={props.conditions.wind.unit}
//       windDirection={props.conditions.wind.compassDirection}
//     />
//     <LocationTemperature
//       temperature={props.conditions.condition.temperature}
//       temperatureUnit={props.conditions.condition.unit}
//     />
//   </div>
// );

export default Location;
