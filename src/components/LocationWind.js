import React from 'react';

const LocationWind = props => (
  <li className="cond__item">
    <h4 className="cond__h4">Wind</h4>
    <p className="cond__p">{props.windSpeed} {props.windUnit}</p>
    <p className="cond__p">{props.windDirection}</p>
  </li>
);

export default LocationWind;
