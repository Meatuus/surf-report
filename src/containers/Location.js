import React, {Component} from 'react';
// import LocationSwell from '../components/LocationSwell';
// import LocationWind from '../components/LocationWind';
// import LocationTemperature from '../components/LocationTemperature';
// import ConditionReport from '../components/ConditionReport';
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

    // const locationArray = this.props.conditions;
    // const locationEach = locationArray.map((item, index) => (
    //   <div className="App-intro" key={index}>
    //     <h1>{`${new Date(item.timestamp*1000).getHours()}:${new Date(item.timestamp*1000).getMinutes()}0`}</h1>
    //     <LocationSwell
    //       swellHeightMin={item.swell.minBreakingHeight}
    //       swellHeightMax={item.swell.maxBreakingHeight}
    //       swellUnit={item.swell.unit}
    //       swellDirection={item.swell.components.combined.compassDirection}
    //     />
    //     <LocationWind windSpeed={item.wind.speed}
    //       windUnit={item.wind.unit}
    //       windDirection={item.wind.compassDirection}
    //     />
    //     <LocationTemperature
    //       temperature={item.condition.temperature}
    //       temperatureUnit={item.condition.unit}
    //     />
    //   </div>
    // ));
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
