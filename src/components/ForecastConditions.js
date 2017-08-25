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

    const maxSwellArray = firstDay.map((item, index) => (
      item.swell.maxBreakingHeight
    ));
    const maxSwell = Math.max(...maxSwellArray);

    const minSwellArray = firstDay.map((item, index) => (
      item.swell.minBreakingHeight
    ));
    const minSwell = Math.max(...minSwellArray);

    console.log("hi");
    console.log(firstDay);
    return (
      <div>
        <h1>Forecasting...</h1>
        <h3>{minSwell} ft - {maxSwell} ft</h3>
        
      </div>
    );
  }
}

export default ForecastConditions;
