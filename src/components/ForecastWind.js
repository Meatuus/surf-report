import React, {Component} from 'react';
import LocationWind from './LocationWind';

class ForecastWind extends Component {
  render() {
    const { conditions } = this.props;

    // // Max Swell calculations
    // const maxSwellArray = conditions.map((item) => (
    //   item.swell.maxBreakingHeight
    // ));
    // const maxSwell = Math.max(...maxSwellArray);
    //
    // Min Wind calculations
    const windArray = conditions.map((item) => (
      item.wind.speed
    ));
    const minWind = Math.min(...windArray);
    const maxWind = Math.max(...windArray);

    // Wind direction
    const windDirection = conditions[0].wind.compassDirection;

    // Wind unit
    const windUnit = conditions[0].wind.unit;

    return(
      <div>
        <h3>{this.props.day}</h3>
        <LocationWind
          windSpeed={`${minWind} - ${maxWind}`}
          windUnit={windUnit}
          windDirection={windDirection}
        />
      </div>
    );
  }
}

export default ForecastWind;
