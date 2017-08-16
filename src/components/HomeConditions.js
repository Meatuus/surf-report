import React from 'react';
import ConditionReport from './ConditionReport';

const HomeConditions = (props) => (
  <div>
    <h2>Home Page</h2>
    <ConditionReport swellHeightMin={props.conditionsArray.swell.minBreakingHeight}
      swellHeightMax={props.conditionsArray.swell.maxBreakingHeight}
      swellUnit={props.conditionsArray.swell.unit}
      swellDirection={props.conditionsArray.swell.components.combined.compassDirection}
      windSpeed={props.conditionsArray.wind.speed}
      windDirection={props.conditionsArray.wind.compassDirection}
      windUnit={props.conditionsArray.wind.unit}
      temperature={props.conditionsArray.condition.temperature}
      temperatureUnit={props.conditionsArray.condition.unit}
    />
  </div>
);

export default HomeConditions;
