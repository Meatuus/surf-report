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
      currentConditions: locationArray[0],
    });
  }


  componentDidMount() {
    setInterval(this.getCurrent(), 5000);
  }

  render() {
    return(
      <div>
        <h2>Current Conditions</h2>
        <ConditionReport
          time={this.state.currentConditions.timestamp}
          swellHeightMin={this.state.currentConditions.swell.minBreakingHeight}
          swellHeightMax={this.state.currentConditions.swell.maxBreakingHeight}
          swellUnit={this.state.currentConditions.swell.unit}
          swellDirection={this.state.currentConditions.swell.components.combined.compassDirection}
          windSpeed={this.state.currentConditions.wind.speed}
          windDirection={this.state.currentConditions.wind.compassDirection}
          windUnit={this.state.currentConditions.wind.unit}
          temperature={this.state.currentConditions.condition.temperature}
          temperatureUnit={this.state.currentConditions.condition.unit}
        />
        {/* <h3>{locations}</h3> */}
        {/* {future[0].timestamp} */}
      </div>
    );
  }
}

export default CurrentConditions;
