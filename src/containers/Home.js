import React, {Component} from 'react';
import HomeConditions from '../components/HomeConditions';

import {
  Route,
  Link
} from 'react-router-dom';
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
      <HomeConditions conditions={conditionsArray[index]} key={index} />
    ));

    // const locationLinks = conditionsArray.map((item, index) => (
    //   <Link to={`/location/${item.location}`} key={index}>{item.location}</Link>
    // ))
    //
    // const locationRoutes = conditionsArray.map((item, index) => (
    //   <Route path={`/location/${item.location}`} key={index} component={
    //     () => (<Location />
    //     )} />
    // ))

    return (
      <div>
        <h3>Home Page</h3>
        <div>
          <Link to='/location'>Location</Link>
          <Route path='/location' component={Location} />
          {/* {locationLinks}
          {locationRoutes} */}
        </div>
        {conditionsLocation}
      </div>
    );
  }
}

export default Home;
