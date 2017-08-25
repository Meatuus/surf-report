import React, {Component} from 'react';
import LocationSwell from '../components/LocationSwell';
import LocationWind from '../components/LocationWind';
import LocationTemperature from '../components/LocationTemperature';
import ConditionReport from '../components/ConditionReport';
import CurrentConditions from '../components/CurrentConditions';
import ForecastConditions from '../components/ForecastConditions';

class Location extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // currentConditions: this.props.conditions,
      conditionDays: this.props.conditions,
      maxSwell: "",
      // conditionsDayOne: this.props.conditions,
      // conditionsDayTwo: this.props.conditions,
      // conditionsDayThree: this.props.conditions,
      // conditionsDayFour: this.props.conditions,
      // conditionsDayFive: this.props.conditions,
    }

    // this.getCurrent = this.getCurrent.bind(this);
    this.getDays = this.getDays.bind(this);
    // this.days = this.days.bind(this);
    // this.dayOne = this.dayOne.bind(this);
    // this.dayTwo = this.dayTwo.bind(this);
    // this.dayThree = this.dayThree.bind(this);
    // this.dayFour = this.dayFour.bind(this);
    // this.dayFive = this.dayFive.bind(this);
    // this.maxSwell = this.maxSwell.bind(this);
  }

  // getCurrent() {
  //   let locationArray = [];
  //   let date = (Date.now()/1000);
  //
  //   for (var i = 0; i < this.props.conditions.length; i++) {
  //     if (this.props.conditions[i].timestamp > date) {
  //       locationArray.push(this.props.conditions[i])
  //     }
  //   }
  //
  //   this.setState({
  //     currentConditions: locationArray,
  //   });
  // }

  getDays() {
    let days = []

    for (var i = 0; i < this.props.conditions.length; i+=8) {
      days.push(this.props.conditions[i])
    }

    this.setState({
      conditionDays: days
    });
  }

  // maxSwell() {
  //   const dayOneMax = this.props.days;
  //   const dayOneAll = dayOneMax.map((item) => (
  //     item
  //   ));
  //   console.log(`max: ${dayOneAll[0]}`);
  //   console.log(dayOneMax);
  //   this.setState({maxSwell: dayOneMax})
  //   // otherFunction()
  // }
  // otherFunction() {
  //
  // }

  // days() {
  //   let dayOne = [];
  //   let dayTwo = [];
  //   let dayThree = [];
  //   let dayFour = [];
  //   let dayFive = [];
  //
  //   for (var i = 0; i < 8; i++) {
  //     dayOne.push(this.props.conditions[i])
  //   }
  //   for (var i = 8; i < 16; i++) {
  //     dayTwo.push(this.props.conditions[i])
  //   }
  //   for (var i = 16; i < 24; i++) {
  //     dayThree.push(this.props.conditions[i])
  //   }
  //   for (var i = 24; i < 32; i++) {
  //     dayFour.push(this.props.conditions[i])
  //   }
  //   for (var i = 32; i < 40; i++) {
  //     dayFive.push(this.props.conditions[i])
  //   }
  //
  //   this.setState({
  //     conditionsDayOne: dayOne,
  //     conditionsDayTwo: dayTwo,
  //     conditionsDayThree: dayThree,
  //     conditionsDayFour: dayFour,
  //     conditionsDayFive: dayFive,
  //   });
  // }

  // dayTwo() {
  //   let day = []
  //
  //   for (var i = 8; i < 16; i++) {
  //     day.push(this.props.conditions[i])
  //   }
  //
  //   this.setState({
  //     conditionsDayTwo: day
  //   });
  // }

  // dayThree() {
  //   let day = []
  //
  //   for (var i = 16; i < 24; i++) {
  //     day.push(this.props.conditions[i])
  //   }
  //
  //   this.setState({
  //     conditionsDayThree: day
  //   });
  // }

  // dayFour() {
  //   let day = []
  //
  //   for (var i = 24; i < 32; i++) {
  //     day.push(this.props.conditions[i])
  //   }
  //   // if (day.length > 0) {
  //   //
  //   //   day = Math.max(day[0].timestamp, day[1].timestamp, day[2].timestamp, day[3].timestamp, day[4].timestamp, day[5].timestamp, day[6].timestamp);
  //   // }
  //
  //   this.setState({
  //     conditionsDayFour: day
  //   });
  // }

  // dayFive() {
  //   let day = []
  //
  //   for (var i = 32; i < 40; i++) {
  //     day.push(this.props.conditions[i])
  //   }
  //
  //   this.setState({
  //     conditionsDayFive: day
  //   });
  // }

  componentDidMount() {
    // setInterval(this.getCurrent(), 5000);
    this.getDays();
    // this.maxSwell();
    // this.days();
    // this.dayOne();
    // this.dayTwo();
    // this.dayThree();
    // this.dayFour();
    // this.dayFive();
  }

  render() {
    // const futureConditions = this.state.currentConditions;
    // const futureConditionsArray = futureConditions.map((item, index) => (
    //   <ConditionReport
    //     swellHeightMin={item.swell.minBreakingHeight}
    //     swellHeightMax={item.swell.maxBreakingHeight}
    //     swellUnit={item.swell.unit}
    //     swellDirection={item.swell.components.combined.compassDirection}
    //     windSpeed={item.wind.speed}
    //     windDirection={item.wind.compassDirection}
    //     windUnit={item.wind.unit}
    //     temperature={item.condition.temperature}
    //     temperatureUnit={item.condition.unit}
    //     key={index}
    //   />
    // ));
    // const currentCondition = futureConditionsArray[0];

    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let days = this.state.conditionDays;
    const conditionDays = days.map((item, index) => (
      // <li><h2 key={index}>{weekdays[new Date(item.timestamp*1000).getDay()]}</h2></li>
      <li key={index}>{item.timestamp}</li>
    ));

    // const conditions = this.state.conditions;
    // const conditionOne = conditions[0].timestamp;
    // const conditionsBreakDown = [
    //   [conditions[0], conditions[1], conditions[2], conditions[3], conditions[4], conditions[5], conditions[6], conditions[7]],
    //   [conditions[8], conditions[9], conditions[10], conditions[11], conditions[12], conditions[13], conditions[14], conditions[15]]
    //   [conditions[16], conditions[17], conditions[18], conditions[19], conditions[20], conditions[21], conditions[22], conditions[23]]
    //   [conditions[24], conditions[25], conditions[26], conditions[27], conditions[28], conditions[29], conditions[30], conditions[31]]
    //   [conditions[32], conditions[33], conditions[34], conditions[35], conditions[36], conditions[37], conditions[38], conditions[39]]
    // ];
    // const maxSwell = conditionsBreakDown.map((item, index) => (
    //   Math.max([item[0].swell.maxBreakingHeight, item[1].swell.maxBreakingHeight, item[2].swell.maxBreakingHeight, item[3].swell.maxBreakingHeight, item[4].swell.maxBreakingHeight, item[5].swell.maxBreakingHeight, item[6].swell.maxBreakingHeight, item[7].swell.maxBreakingHeight,])
    // ));
    // const max =


    // const dayOne = this.state.conditionsDayOne;
    // const dayTwo = this.state.conditionsDayTwo;
    // const dayThree = this.state.conditionsDayThree;
    // const dayFour = this.state.conditionsDayFour;
    // const dayFive = this.state.conditionsDayFive;

    // const dayOneArray = dayOne.map((item, index) => (
    //   <h3 key={index}>{item.fadedRating}</h3>
    // ));
    //
    // const dayOneMax = Math.max(dayOneArray);


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

    const daysTest = this.props.conditions.map((item) => (
      <h2>{item.timestamp}</h2>
    ));
    const dayzzz = daysTest[1];

    // const first = this.state.conditions[0].timestamp

    // const statething = this.props.days;
    // const daynumtwo = statething.map((item, index) => (
    //   <li key={index}>{item.fadedRating}</li>
    // ));

    // const statething = this.state.maxSwell;
    // const daynumone = statething.map((item, index) => (
    //   <li key={index}>{index}</li>
    // ));
    return(
      <div>
        <CurrentConditions conditions={this.props.conditions}/>
        {/* {currentCondition} */}
        <h1>Forecast</h1>
        <ul>
          {conditionDays}
          {/* {daynumone} */}
          {daysTest}
        </ul>
        {/* {dayOneArray} */}
        {/* <h2>Day Max: {first}</h2> */}
        {/* <h2>{dayOne}</h2> */}
        {/* {conditionOne} */}
        {/* {`${maxSwell[0]} ${maxSwell[7]}`} */}
        {/* {locationEach} */}
        <ForecastConditions conditions={this.props.conditions}/>
      </div>
    );
  }
}

export default Location;
