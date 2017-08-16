import React from 'react';
import ConditionReport from './ConditionReport';

const ConditionLocation = (props) => (
  <div>
    <ConditionReport
      location={props.conditions.location}
      swellHeightMin={props.conditions.swell.minBreakingHeight}
      swellHeightMax={props.conditions.swell.maxBreakingHeight}
      swellUnit={props.conditions.swell.unit}
      swellDirection={props.conditions.swell.components.combined.compassDirection}
      windSpeed={props.conditions.wind.speed}
      windDirection={props.conditions.wind.compassDirection}
      windUnit={props.conditions.wind.unit}
      temperature={props.conditions.condition.temperature}
      temperatureUnit={props.conditions.condition.unit}
    />
  </div>
);

export default ConditionLocation;
