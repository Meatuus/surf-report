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

    for (var i = 8; i < 16; i++) {
      firstDay.push(this.props.conditions[i])
    }
    for (var i = 16; i < 24; i++) {
      secondDay.push(this.props.conditions[i])
    }
    for (var i = 24; i < 32; i++) {
      thirdDay.push(this.props.conditions[i])
    }
    for (var i = 32; i < 40; i++) {
      fourthDay.push(this.props.conditions[i])
    }

    // Max Swell calculations
    const maxSwellArrayOne = firstDay.map((item, index) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellOne = Math.max(...maxSwellArrayOne);

    const maxSwellArrayTwo = secondDay.map((item, index) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellTwo = Math.max(...maxSwellArrayTwo);

    const maxSwellArrayThree = thirdDay.map((item, index) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellThree = Math.max(...maxSwellArrayThree);

    const maxSwellArrayFour = fourthDay.map((item, index) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwellFour = Math.max(...maxSwellArrayFour);

    // Min Swell calculations
    const minSwellArrayOne = firstDay.map((item, index) => (
      item.swell.minBreakingHeight
    ));
    const minSwellOne = Math.max(...minSwellArrayOne);

    const minSwellArrayTwo = secondDay.map((item, index) => (
      item.swell.minBreakingHeight
    ));
    const minSwellTwo = Math.max(...minSwellArrayTwo);

    const minSwellArrayThree = thirdDay.map((item, index) => (
      item.swell.minBreakingHeight
    ));
    const minSwellThree = Math.max(...minSwellArrayThree);

    const minSwellArrayFour = fourthDay.map((item, index) => (
      item.swell.minBreakingHeight
    ));
    const minSwellFour = Math.max(...minSwellArrayFour);

    console.log("hi");
    console.log(firstDay);
    return (
      <div>
        <h1>Forecasting...</h1>
        <h3>{minSwellOne} ft - {maxSwellOne} ft</h3>
        <h3>{minSwellTwo} ft - {maxSwellTwo} ft</h3>
        <h3>{minSwellThree} ft - {maxSwellThree} ft</h3>
        <h3>{minSwellFour} ft - {maxSwellFour} ft</h3>
      </div>
    );
  }
}

export default ForecastConditions;
