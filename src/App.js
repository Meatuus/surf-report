import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import conditions from './data/conditions';
import Home from './containers/Home';
import Locations from './containers/Locations'
import Location from './containers/Location'
import './assets/css/App.css';
import logo from './assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions: [],
      // conditionsNow: "",
      // conditionsToday: [],
      // conditionsTomorrow: "",
      // conditonsTwoDays: "",
      // conditonsThreeDays: "",
      // conditonsFourDays: "",
      // conditonsFiveDays: "",
      loading: true,
      // locationFirst: {
      //   location: "Lennox Head",
      //   conditions: []
      // },
      locationOne: "Lennox Head",
      conditionsOne: [],
      locationTwo: "Ballina",
      conditionsTwo: [],
      locationThree: "Byron Bay",
      conditionsThree: [],
      locations: {
        locationOne: "Lennox Head",
        conditionsOne: [],
        locationTwo: "Ballina",
        conditionsTwo: [],
        locationThree: "Byron Bay",
        conditionsThree: [],
        // first: {
        //   location: 'Lennox Head',
        //   conditions: []
        // },
        // second: {
        //   location: 'Ballina',
        //   conditions: []
        // },
        // third: {
        //   location: 'Byron Bay',
        //   conditions: []
        // },
      }
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }

  loadCommentsFromServer() {

    axios.get(this.props.urlFirst)
    .then(res => {
      // let locations = {...this.state.locations}
      // locations.conditionsOne = res.data
      this.setState({
        conditionsOne: res.data,
        loading: false,
      });
      console.log('state set');
    })

    axios.get(this.props.urlSecond)
    .then(res => {
      // let locations = {...this.state.locations}
      // locations.conditionsTwo = res.data
      this.setState({
        conditionsTwo: res.data,
        loading: false,
      });
      console.log('state set');
    })

    axios.get(this.props.urlThird)
    .then(res => {
      // let locations = {...this.state.locations}
      // locations.conditionsThree = res.data
      this.setState({
        conditionsThree: res.data,
        loading: false,
      });
      console.log('state set');
    })
    // TODO: sort past times and remove from data
    // TODO: break up conditions state into current and future array
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    // const locationRoutes = conditions.map((item, index) => (
    //   <Route
    //     path={`/location/${item.location.replace(/ /g,'')}`} key={index} component={ () => (<Location conditions={conditions[index]}/>)}
    //   />
    // ))
    const conditionsAll = this.state.locations.conditionsTwo;

    const times = conditionsAll.map((item, index) => (
      <h2 key={index}>{item.timestamp}</h2>
    ));

    // const conditionsLennox = this.state.locationFirst.conditions;
    //
    // const lennox = conditionsLennox.map((item, index) => (
    //   <h2 key={index}>{item.timestamp}</h2>
    // ));

    return (
      <Router>
        <div className="App">
          <nav className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Surf Alert</h1>

            <h2>{this.state.locations.locationOne}</h2>
            {/* <div>
              {lennox}
            </div> */}
            {/* <p>{this.state.locations.first.conditions}</p> */}
            {/* <p>array: {this.state.conditions.timestamp}</p> */}
            {/* <div>
              {this.state.conditions.map(e => (
                <h2>New Blogs:</h2>
                <div>

              <h3>{e.timestamp}</h3>
              </div>
              <p>{e.solidRating}</p>
              ))}
            </div> */}
            <div>{times}</div>
            <ul>
              <Link to="/">Home</Link>{' '}
              <Link to="/locations">Locations</Link>
              {/* <Link to="/profile">Profile</Link>{' '} */}
            </ul>
          </nav>
          <Route exact path="/" component={
            () => (<Home
              locationOneConditions={this.state.conditionsOne}
              locationOneName={this.state.locationOne}
              locationTwoConditions={this.state.conditionsTwo}
              locationTwoName={this.state.locationTwo}
              locationThreeConditions={this.state.conditionsThree}
              locationThreeName={this.state.locationThree}
                   />
            )} />
          {/* <Route path="/locations" component={
            () => (<Locations conditions={conditions}/>
          )} /> */}
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
