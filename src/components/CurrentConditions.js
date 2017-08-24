import React, {Component} from 'react';
import ConditionReport from './ConditionReport';

class CurrentConditions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentConditions: this.props.conditions
    }

    this.getCurrent = this.getCurrent.bind(this);
  }

  getCurrent() {
    let locationArray = [];
    let date = (Date.now()/1000);

    for (var i = 0; i < this.state.currentConditions.length; i++) {
      if (this.state.currentConditions[i].timestamp > date) {
        locationArray.push(this.props.conditions[i])
      }
    }

    this.setState({
      currentConditions: locationArray,
    });
  }


  componentDidMount() {
    setInterval(this.getCurrent(), 5000);
  }

  render() {
    const futureConditions = this.state.currentConditions
    const futureConditionsArray = futureConditions.map((item, index) => (
      <ConditionReport
        time={item.timestamp}
        swellHeightMin={item.swell.minBreakingHeight}
        swellHeightMax={item.swell.maxBreakingHeight}
        swellUnit={item.swell.unit}
        swellDirection={item.swell.components.combined.compassDirection}
        windSpeed={item.wind.speed}
        windDirection={item.wind.compassDirection}
        windUnit={item.wind.unit}
        temperature={item.condition.temperature}
        temperatureUnit={item.condition.unit}
        key={index}
      />
    ))
    const currentCondition = futureConditionsArray[0]

    return(
      <div>
        <h2>Current Conditions</h2>
        {currentCondition}
      </div>
    );
  }
}

export default CurrentConditions;
