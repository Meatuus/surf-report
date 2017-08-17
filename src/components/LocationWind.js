import React from 'react';

const LocationWind = props => (
  <li>
    <h3>Wind</h3>
    <div>{props.windSpeed} {props.windUnit}</div>
    <div>{props.windDirection}</div>
  </li>
);

export default LocationWind;
