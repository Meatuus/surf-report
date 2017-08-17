import React, {Component} from 'react';
// import HomeConditions from '../components/HomeConditions';

const Location = (props) => (
  <div>

    <div className="App-intro">
      {/* <h2>{props.location}</h2>
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
      </ul> */}
      <h1>TEsting Location</h1>
      <h2>{props.conditions.location}</h2>
    </div>
  </div>
);

export default Location;
