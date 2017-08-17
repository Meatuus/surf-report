import React from 'react';

const LocationSwell = props => (
  <li>
    <h3>Swell</h3>
    <div>{props.swellHeightMin} - {props.swellHeightMax} {props.swellUnit}</div>
    <div>{props.swellDirection}</div>
  </li>
);

export default LocationSwell;
