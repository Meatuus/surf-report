import React, {Component} from 'react';
import LocationSwell from '../components/LocationSwell';
import LocationWind from '../components/LocationWind';
import LocationTemperature from '../components/LocationTemperature';

const Location = (props) => (
  <div className="App-intro">
    <h1>{props.conditions.location}</h1>
    <LocationSwell
      swellHeightMin={props.conditions.swell.minBreakingHeight}
      swellHeightMax={props.conditions.swell.maxBreakingHeight}
      swellUnit={props.conditions.swell.unit}
      swellDirection={props.conditions.swell.components.combined.compassDirection}
    />
    <LocationWind windSpeed={props.conditions.wind.speed}
      windUnit={props.conditions.wind.unit}
      windDirection={props.conditions.wind.compassDirection}
    />
    <LocationTemperature
      temperature={props.conditions.condition.temperature}
      temperatureUnit={props.conditions.condition.unit}
    />
  </div>
);

export default Location;
