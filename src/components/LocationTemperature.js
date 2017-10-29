import React from 'react';

const LocationTemperature = props => (
  <li className="cond__item">
    <h4 className="cond__h4">Temperature</h4>
    <p className="cond__p">{props.temperature} {`${props.temperatureUnit}`.toUpperCase()}</p>
  </li>
);

export default LocationTemperature;
