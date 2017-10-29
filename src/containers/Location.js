import React, {Component} from 'react';
import CurrentConditions from '../components/CurrentConditions';
import ForecastConditions from '../components/ForecastConditions';

class Location extends Component {
  constructor() {
    super();

    this.state = { renderForecast: false }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    let state = (this.state.renderForecast === false ? true : false);

    this.setState({renderForecast: state});

    if (this.state.renderForecast === false) {
      document.querySelector('.forecast_button').innerHTML = "Close Forecast";
    } else {
      document.querySelector('.forecast_button').innerHTML = "See 4 Day Forecast";
    }
  }

  render() {

    const { conditions, location } = this.props;

    const renderForecast = this.state.renderForecast;

    let button = (renderForecast === true ? <ForecastConditions conditions={conditions}/> : null)

    return(
      <div className="location__container">
        <h2 className="cond__h2">{location}</h2>
        <h3 className="cond__h3">Current Conditions</h3>
        <div className="location-conds">
          <CurrentConditions conditions={conditions}/>
        </div>
        {button}
        <button className="forecast_button" onClick={this.handleButtonClick}>See 4 Day Forecast</button>
      </div>
    );
  }
}

export default Location;
