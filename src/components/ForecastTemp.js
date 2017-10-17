import React, {Component} from 'react';
import LocationTemperature from './LocationTemperature';

class ForecastTemp extends Component {
  render() {
    const { conditions } = this.props;

    // Temp calculations
    const tempArray = conditions.map((item) => (
      item.condition.temperature
    ));
    const minTemp = Math.min(...tempArray);
    const maxTemp = Math.max(...tempArray);

    // Wind unit
    const tempUnit = conditions[0].condition.unit;

    return(
      <div>
        <LocationTemperature
          temperature={`${minTemp} - ${maxTemp}`}
          temperatureUnit={tempUnit}
        />
      </div>
    );
  }
}

export default ForecastTemp;
