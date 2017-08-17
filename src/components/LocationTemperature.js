import React from 'react';

const LocationTemperature = props => (
  <li>
    <h3>Temperature</h3>
    <div>{props.temperature} {`${props.temperatureUnit}`.toUpperCase()}</div>
  </li>
);

export default LocationTemperature;
