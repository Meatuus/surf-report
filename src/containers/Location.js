import React, {Component} from 'react';
// import LocationSwell from '../components/LocationSwell';
// import LocationWind from '../components/LocationWind';
// import LocationTemperature from '../components/LocationTemperature';
// import ConditionReport from '../components/ConditionReport';
import CurrentConditions from '../components/CurrentConditions';
import ForecastConditions from '../components/ForecastConditions';

class Location extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //
  //   }
  //
  // }

  render() {

    // const locationArray = this.props.conditions;
    // const locationEach = locationArray.map((item, index) => (
    //   <div className="App-intro" key={index}>
    //     <h1>{`${new Date(item.timestamp*1000).getHours()}:${new Date(item.timestamp*1000).getMinutes()}0`}</h1>
    //     <LocationSwell
    //       swellHeightMin={item.swell.minBreakingHeight}
    //       swellHeightMax={item.swell.maxBreakingHeight}
    //       swellUnit={item.swell.unit}
    //       swellDirection={item.swell.components.combined.compassDirection}
    //     />
    //     <LocationWind windSpeed={item.wind.speed}
    //       windUnit={item.wind.unit}
    //       windDirection={item.wind.compassDirection}
    //     />
    //     <LocationTemperature
    //       temperature={item.condition.temperature}
    //       temperatureUnit={item.condition.unit}
    //     />
    //   </div>
    // ));

    return(
      <div>
        <h2>{this.props.location}</h2>
        <CurrentConditions conditions={this.props.conditions}/>
        <ForecastConditions conditions={this.props.conditions}/>
      </div>
    );
  }
}

export default Location;
