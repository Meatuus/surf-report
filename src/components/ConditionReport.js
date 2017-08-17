import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Location from '../containers/Location';

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
        <li>
          <h3>Swell</h3>
          <div>{props.swellHeightMin} - {props.swellHeightMax} {props.swellUnit}</div>
          <div>{props.swellDirection}</div>
        </li>
        <li>
          <h3>Wind</h3>
          <div>{props.windSpeed} {props.windUnit}</div>
          <div>{props.windDirection}</div>
        </li>
        <li>
          <h3>Temperature</h3>
          <div>{props.temperature} {`${props.temperatureUnit}`.toUpperCase()}</div>
        </li>
      </ul>
    </div>
  </div>
);

export default ConditionReport;
