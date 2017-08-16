import React from 'react';

const ConditionReport = props => (
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
);

export default ConditionReport;
