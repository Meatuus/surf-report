import React, {Component} from 'react';
import LocationSwell from '../components/LocationSwell';
import LocationWind from '../components/LocationWind';
import LocationTemperature from '../components/LocationTemperature';
import ConditionReport from '../components/ConditionReport';

class Location extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentConditions: this.props.conditions,
      conditionDays: []
    }

    this.getCurrent = this.getCurrent.bind(this);
    this.getDays = this.getDays.bind(this);
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

  getDays() {
    let days = []

    for (var i = 0; i < this.props.conditions.length; i+=8) {
      days.push(this.props.conditions[i])
    }

    this.setState({
      conditionDays: days
    })
  }


  componentDidMount() {
    setInterval(this.getCurrent(), 5000);
    this.getDays();
  }

  render() {
    const futureConditions = this.state.currentConditions
    const futureConditionsArray = futureConditions.map((item, index) => (
      <ConditionReport
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

    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let days = this.state.conditionDays
    const conditionDays = days.map((item, index) => (
      <li><h2 key={index}>{weekdays[new Date(item.timestamp*1000).getDay()]}</h2></li>
    ))

    const locationArray = this.props.conditions;
    const locationEach = locationArray.map((item, index) => (
      <div className="App-intro" key={index}>
        <h1>{`${new Date(item.timestamp*1000).getHours()}:${new Date(item.timestamp*1000).getMinutes()}0`}</h1>
        <LocationSwell
          swellHeightMin={item.swell.minBreakingHeight}
          swellHeightMax={item.swell.maxBreakingHeight}
          swellUnit={item.swell.unit}
          swellDirection={item.swell.components.combined.compassDirection}
        />
        <LocationWind windSpeed={item.wind.speed}
          windUnit={item.wind.unit}
          windDirection={item.wind.compassDirection}
        />
        <LocationTemperature
          temperature={item.condition.temperature}
          temperatureUnit={item.condition.unit}
        />
      </div>
    ));

    return(
      <div>
        <h1>Current Conditions</h1>
        {currentCondition}
        <h1>Forecast</h1>
        <ul>
          {conditionDays}
        </ul>
        {locationEach}
      </div>
    );
  }
}

export default Location;
