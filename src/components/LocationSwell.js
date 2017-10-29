import React from 'react';

const LocationSwell = props => (
  <li className="cond__item">
    <h4 className="cond__h4">Swell</h4>
    <p className="cond__p">{props.swellHeightMin} - {props.swellHeightMax} {props.swellUnit}</p>
    <p className="cond__p">{props.swellDirection}</p>
  </li>
);

export default LocationSwell;
