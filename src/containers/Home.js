import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomeConditions from '../components/HomeConditions';
import Location from './Location';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // conditionsArray: this.props.conditions
      locationsArray: this.props.locationFirst
    }
  }

  render() {
    // let conditionsArray = this.state.conditionsArray
    //
    // let conditionsLocation = conditionsArray.map((item, index) => (
    //   // <HomeConditions conditions={conditionsArray[index]} key={index} />
    //   <h1 key={index}>{conditionsArray[index]}</h1>
    // ));

    // const locations = Object.keys(this.state.locationsArray);
    // const values = Object.values(this.state.locationsArray);

//     {Object.keys(yourObject).map(function(key) {
//     return <div>Key: {key}, Value: {yourObject[key]}</div>;
// })}
    // console.log(locations);
    // console.log(values);
    // const locationOne
    // const locationsAll = this.props.locations;
    // const locationTitlesArray = [locationsAll.locationOne, locationsAll.locationTwo, locationsAll.locationThree];
    // const locationTitles = locationsAll..map((item, index) => (
    //   <h2 key={index}>{item}</h2>
    // ))

    // const locationLeno = this.props.locationFirst.conditions;
    // const locationLinks = locationLeno.map((item, index) => (
    //   <Link to={`/location/${this.props.locationFirst.location.replace(/ /g,'')}`} key={index}>Location: {item.timestamp}</Link>
    //   // <h2>Key: {key}, Value: {this.state.locationsArray[key]}</h2>
    // ))

    const locationOne = this.props.locationOneConditions
    const locationOneArray = locationOne.map((item, index) => (
      <h2 key={index}>{item.timestamp}</h2>
    ))

    const locationTwo = this.props.locationTwoConditions
    const locationTwoArray = locationTwo.map((item, index) => (
      <h2 key={index}>{item.timestamp}</h2>
    ))

    const locationThree = this.props.locationThreeConditions
    const locationThreeArray = locationThree.map((item, index) => (
      <h2 key={index}>{item.timestamp}</h2>
    ))

    return (
      <div>
        <h3>Home Page</h3>
        <div>
          <ul>
            {/* {locationLinks} */}
            <Link to={`/location/${this.props.locationOneName.replace(/ /g,'')}`}>Location: {this.props.locationOneName}</Link>{' '}
            <Link to={`/location/${this.props.locationTwoName.replace(/ /g,'')}`}>Location: {this.props.locationTwoName}</Link>{' '}
            <Link to={`/location/${this.props.locationThreeName.replace(/ /g,'')}`}>Location: {this.props.locationThreeName}</Link>
          </ul>

          {/* {locationTitles} */}
        </div>
        <div>
          <h1>{this.props.locationOneName} Times:</h1>
          {locationOneArray}
        </div>
        <div>
          <h1>{this.props.locationTwoName} Times:</h1>
          {locationTwoArray}
        </div>
        <div>
          <h1>{this.props.locationThreeName} Times:</h1>
          {locationThreeArray}
        </div>
        {/* {conditionsLocation} */}
      </div>
    );
  }
}

export default Home;
