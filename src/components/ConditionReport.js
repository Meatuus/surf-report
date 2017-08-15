import React, {Component} from 'react';

class ConditionReport extends Component {
  // constructor() {
  //   super(props);
  //
  // }

  render() {
    return (
      <div>
        <h2>Location Conditions</h2>
        <ul>
          <li>
            <h3>Swell</h3>
            <div>{this.props.swellHeightMin} - {this.props.swellHeightMax} {this.props.swellUnit}</div>
            <div>{this.props.swellDirection}</div>
          </li>
          <li>
            <h3>Wind</h3>
            <div>{this.props.windSpeed} {this.props.windUnit}</div>
            <div>{this.props.windDirection}</div>
          </li>
          <li>
            <h3>Temperature</h3>
            <div>{this.props.temperature} {`${this.props.temperatureUnit}`.toUpperCase()}</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ConditionReport;
