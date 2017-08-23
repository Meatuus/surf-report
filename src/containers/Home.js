import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomeConditions from '../components/HomeConditions';
import CurrentConditions from '../components/CurrentConditions';
import Location from './Location';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     // conditionsArray: this.props.conditions
  //     locationsArray: this.props.locationFirst
  //   }
  // }

  render() {
    const locationOne = this.props.locationOneConditions
    const locationOneArray = locationOne.map((item, index) => (
      <CurrentConditions conditions={item} key={index}/>
    ))

    const locationTwo = this.props.locationTwoConditions
    const locationTwoArray = locationTwo.map((item, index) => (
      <HomeConditions conditions={item} key={index}/>
    ))

    const locationThree = this.props.locationThreeConditions
    const locationThreeArray = locationThree.map((item, index) => (
      <HomeConditions conditions={item} key={index}/>
    ))

    return (
      <div>
        <h3>Home Page</h3>
        <div>
          <ul>
            <Link to={`/location/${this.props.locationOneName.replace(/ /g,'_')}`}>Location: {this.props.locationOneName}</Link>{' '}
            <Link to={`/location/${this.props.locationTwoName.replace(/ /g,'_')}`}>Location: {this.props.locationTwoName}</Link>{' '}
            <Link to={`/location/${this.props.locationThreeName.replace(/ /g,'_')}`}>Location: {this.props.locationThreeName}</Link>
          </ul>
        </div>
        <div>
          <h1>{this.props.locationOneName} Times:</h1>
          <CurrentConditions conditions={this.props.locationOneConditions}/>
          {/* {locationOneArray} */}
        </div>
        <div>
          <h1>{this.props.locationTwoName} Times:</h1>
          {locationTwoArray}
        </div>
        <div>
          <h1>{this.props.locationThreeName} Times:</h1>
          {locationThreeArray}
        </div>
      </div>
    );
  }
}

export default Home;
