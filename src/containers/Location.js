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
      <div>
        <h2>{location}</h2>
        <CurrentConditions conditions={conditions}/>
        {button}
        <button className="forecast_button" onClick={this.handleButtonClick}>See 4 Day Forecast</button>
      </div>
    );
  }
}

export default Location;
