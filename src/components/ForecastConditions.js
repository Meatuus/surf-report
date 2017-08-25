import React, {Component} from 'react';

class ForecastConditions extends Component {
  // constructor() {
  //
  // }

  render() {
    const conditions = this.props.conditions;
    let firstDay = [];
    let secondDay = [];
    let thirdDay = [];
    let fourthDay = [];

    for (let i = 8; i < 16; i++) {
      firstDay.push(conditions[i])
    }
    for (let i = 16; i < 24; i++) {
      secondDay.push(conditions[i])
    }
    for (let i = 24; i < 32; i++) {
      thirdDay.push(conditions[i])
    }
    for (let i = 32; i < 40; i++) {
      fourthDay.push(conditions[i])
    }

    // Get names of each day in forecast
    let days = []
    for (var i = 8; i < conditions.length; i+=8) {
      days.push(conditions[i])
    }
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const conditionDays = days.map((item, index) => (
      <h2 key={index}>{weekdays[new Date(item.timestamp*1000).getDay()]}</h2>
    ));

    // Max Swell calculations
    const maxSwellArrayOne = firstDay.map((item) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellOne = Math.max(...maxSwellArrayOne);

    const maxSwellArrayTwo = secondDay.map((item) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellTwo = Math.max(...maxSwellArrayTwo);

    const maxSwellArrayThree = thirdDay.map((item) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellThree = Math.max(...maxSwellArrayThree);

    const maxSwellArrayFour = fourthDay.map((item) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellFour = Math.max(...maxSwellArrayFour);

    // Min Swell calculations
    const minSwellArrayOne = firstDay.map((item) => (
      item.swell.minBreakingHeight
    ));
    const minSwellOne = Math.max(...minSwellArrayOne);

    const minSwellArrayTwo = secondDay.map((item) => (
      item.swell.minBreakingHeight
    ));
    const minSwellTwo = Math.max(...minSwellArrayTwo);

    const minSwellArrayThree = thirdDay.map((item) => (
      item.swell.minBreakingHeight
    ));
    const minSwellThree = Math.max(...minSwellArrayThree);

    const minSwellArrayFour = fourthDay.map((item) => (
      item.swell.minBreakingHeight
    ));
    const minSwellFour = Math.max(...minSwellArrayFour);

    console.log("hi");
    console.log(firstDay);
    return (
      <div>
        <h1>Forecasting...</h1>
        <h3>{conditionDays[0]}{minSwellOne} ft - {maxSwellOne} ft</h3>
        <h3>{conditionDays[1]}{minSwellTwo} ft - {maxSwellTwo} ft</h3>
        <h3>{conditionDays[2]}{minSwellThree} ft - {maxSwellThree} ft</h3>
        <h3>{conditionDays[3]}{minSwellFour} ft - {maxSwellFour} ft</h3>
      </div>
    );
  }
}

export default ForecastConditions;
