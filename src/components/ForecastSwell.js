import React, {Component} from 'react';
import LocationSwell from './LocationSwell';

class ForecastSwell extends Component {
  render() {
    const { conditions } = this.props;

    // Max Swell calculations
    const maxSwellArray = conditions.map((item) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwell = Math.max(...maxSwellArray);

    // Min Swell calculations
    const minSwellArray = conditions.map((item) => (
      item.swell.minBreakingHeight
    ));
    const minSwell = Math.min(...minSwellArray);

    // Swell direction
    const swellDirection = conditions[0].swell.components.combined.compassDirection;

    // Swell unit
    const swellUnit = conditions[0].swell.unit;

    return(
      <div>
        <LocationSwell
          swellHeightMin={minSwell}
          swellHeightMax={maxSwell}
          swellUnit={swellUnit}
          swellDirection={swellDirection}
        />
      </div>
    );
  }
}

export default ForecastSwell;
