import React, {Component} from 'react';
import LocationWind from './LocationWind';

class ForecastWind extends Component {
  render() {
    const { conditions } = this.props;

    // Wind speed calculations
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
        <LocationWind
          windSpeed={`${minWind} - ${maxWind}`}
          windUnit={windUnit}
          windDirection={windDirection}
        />
    );
  }
}

export default ForecastWind;
