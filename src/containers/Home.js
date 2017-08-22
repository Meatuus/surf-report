import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomeConditions from '../components/HomeConditions';
import Location from './Location';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conditionsArray: this.props.conditions
    }
  }

  render() {
    let conditionsArray = this.state.conditionsArray

    let conditionsLocation = conditionsArray.map((item, index) => (
      // <HomeConditions conditions={conditionsArray[index]} key={index} />
      <h1 key={index}>{conditionsArray[index]}</h1>
    ));

    const locations = this.props.locations;

    const locationLinks = locations.map((item, index) => (
      <Link to={`/location/${item.replace(/ /g,'')}`} key={index}>{item}</Link>
    ))

    return (
      <div>
        <h3>Home Page</h3>
        <div>
          <ul>
            {locationLinks}
          </ul>
        </div>
        {conditionsLocation}
      </div>
    );
  }
}

export default Home;
