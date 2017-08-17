import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Location from '../containers/Location';
import LocationSwell from './LocationSwell';
import LocationWind from './LocationWind';
import LocationTemperature from './LocationTemperature';

const ConditionReport = props => (
  <div>

    <div>
      <Link to={`/locations/${props.location}`}>
        Test
      </Link>

      <Route path={`/locations/${props.location}`} component={Location} />
    </div>
    <div className="App-intro">
      <h2>{props.location}</h2>
      <ul>
        <LocationSwell
          swellHeightMin={props.swellHeightMin}
          swellHeightMax={props.swellHeightMax}
          swellUnit={props.swellUnit}
          swellDirection={props.swellDirection}
        />
        <LocationWind windSpeed={props.windSpeed}
          windUnit={props.windUnit}
          windDirection={props.windDirection}
        />
        <LocationTemperature
          temperature={props.temperature}
          temperatureUnit={props.temperatureUnit}
        />
      </ul>
    </div>
  </div>
);

export default ConditionReport;
