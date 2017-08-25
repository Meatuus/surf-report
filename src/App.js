import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
// import conditions from './data/conditions';
import baseData from './data/baseData';
import Home from './containers/Home';
import Locations from './containers/Locations'
import Location from './containers/Location'
import './assets/css/App.css';
import logo from './assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      // locationOneDays: [],
      conditionsOne: baseData,
      // locationTwoDays: [],
      conditionsTwo: baseData,
      // locationThreeDays: [],
      conditionsThree: baseData,
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    // this.dayTwo = this.dayTwo.bind(this);
    // this.locationOneDays = this.locationOneDays.bind(this);
  }

  loadCommentsFromServer() {

    axios.get(this.props.urlFirst)
    .then(res => {
      this.setState({
        conditionsOne: res.data,
        loading: false,
      });
      // this.locationOneDays();
    });

    // axios.get(this.props.urlSecond)
    // .then(res => {
    //   this.setState({
    //     conditionsTwo: res.data,
    //     loading: false,
    //   });
    //   // this.dayTwo();
    // });
    //
    // axios.get(this.props.urlThird)
    // .then(res => {
    //   this.setState({
    //     conditionsThree: res.data,
    //     loading: false,
    //   });
    // });
    // TODO: sort past times and remove from data
    // TODO: break up conditions state into current and future array
  }

  // dayTwo() {
  //    let day = []
  //
  //    for (var i = 8; i < 16; i++) {
  //      day.push(this.state.conditionsTwo[i])
  //    }
  //
  //    this.setState({
  //      conditionsDayTwo: day
  //    });
  //  }
  //  locationOneDays() {
  //    let dayOne = [];
  //    let dayTwo = [];
  //    let dayThree = [];
  //    let dayFour = [];
  //    let dayFive = [];
   //
  //    for (var i = 0; i < 8; i++) {
  //      dayOne.push(this.state.conditionsOne[i])
  //    }
  //    for (var i = 8; i < 16; i++) {
  //      dayTwo.push(this.state.conditionsOne[i])
  //    }
  //    for (var i = 16; i < 24; i++) {
  //      dayThree.push(this.state.conditionsOne[i])
  //    }
  //    for (var i = 24; i < 32; i++) {
  //      dayFour.push(this.state.conditionsOne[i])
  //    }
  //    for (var i = 32; i < 40; i++) {
  //      dayFive.push(this.state.conditionsOne[i])
  //    }
  //    console.log('location one');
   //
  //    this.setState({
  //      locationOneDays: [
  //        dayOne,
  //        dayTwo,
  //        dayThree,
  //        dayFour,
  //        dayFive
  //      ]
  //     //  conditionsDayOne: dayOne,
  //     //  conditionsDayTwo: dayTwo,
  //     //  conditionsDayThree: dayThree,
  //     //  conditionsDayFour: dayFour,
  //     //  conditionsDayFive: dayFive,
  //    });
  //  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    // const locationRoutes = conditions.map((item, index) => (
    //   <Route
    //     path={`/location/${item.location.replace(/ /g,'')}`} key={index} component={ () => (<Location conditions={conditions[index]}/>)}
    //   />
    // ))
    const locationOne = "Shelly Beach";
    const locationTwo = "Ballina";
    const locationThree = "Byron Bay";

    return (
      <Router>
        <div className="App">
          <nav className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Surf Alert</h1>
            <h2>{this.state.locationOne}</h2>

            <ul>
              <Link to="/">Home</Link>{' '}
              <Link to="/locations">Locations</Link>
              {/* <Link to="/profile">Profile</Link>{' '} */}
            </ul>
          </nav>
          <Route exact path="/" component={
            () => (<Home
              locationOneConditions={this.state.conditionsOne}
              locationOneName={locationOne}
              locationTwoConditions={this.state.conditionsTwo}
              locationTwoName={locationTwo}
              locationThreeConditions={this.state.conditionsThree}
              locationThreeName={locationThree}
                   />
            )} />
          {/* <Route path="/locations" component={
            () => (<Locations conditions={conditions}/>
          )} /> */}
          <Route
            path={`/location/${locationOne.replace(/ /g,'_')}`} component={ () => (<Location location="Shelly Beach" conditions={this.state.conditionsOne}/>)}
          />
          {/* <Route
            path={`/location/${locationTwo.replace(/ /g,'_')}`} component={ () => (<Location location="Ballina" conditions={this.state.conditionsTwo} />)}
            />
            <Route
            path={`/location/${locationThree.replace(/ /g,'_')}`} component={ () => (<Location location="Byron Bay" conditions={this.state.conditionsThree} />)}
          /> */}
          {/* {locationRoutes} */}
          {/* <Route path="/profile" component={
            () => (<Profile experiencesList={experiencesList}/>
          )} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
