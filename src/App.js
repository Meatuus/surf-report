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
      locations: {
        // conditionsTest: [],
        first: {
          location: 'Lennox Head',
          conditions: []
        },
        second: {
          location: 'Ballina',
          conditions: []
        },
        third: {
          location: 'Byron Bay',
          conditions: []
        },
      }
      // locations: ['Lennox Head', 'Ballina', 'Byron Bay']
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }

  loadCommentsFromServer() {

    // let conditionsArray = this.state.conditions;
    // let conditionsTodayArray = this.state.conditionsToday;

    axios.get(this.props.urlFirst)
    .then(res => {
      let locations = {...this.state.locations}
      locations.first.conditions = res.data
      this.setState({
        locations: locations,
        // conditions: conditionsArray,
        loading: false,
        // conditionsToday: conditionsTodayArray
      });
      console.log('state set');
    })

    axios.get(this.props.urlSecond)
    .then(res => {
      let locations = {...this.state.locations}
      locations.second.conditions = res.data
      this.setState({
        conditions: locations,
        loading: false,
        // conditionsToday: conditionsTodayArray
      });
      console.log('state set');
    })

    axios.get(this.props.urlThird)
    .then(res => {
      let locations = {...this.state.locations}
      locations.third.conditions = res.data
      this.setState({
        conditions: locations,
        loading: false,
        // conditionsToday: conditionsTodayArray
      });
      console.log('state set');
    })
    // return conditionsArray;
    // TODO: sort past times and remove from data
    // TODO: break up conditions state into current and future array
  }

  componentDidMount() {
    this.loadCommentsFromServer();

    // this.setState({ conditions: conditionsArray })
    // let base = this
    //
    // let surfApi = "http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=1";
    // fetch(surfApi)
    //   .then((response) => {
    //     return response.json()
    //   }).then((json) => {
    //     base.setState({ conditions: json });
    //     console.log('set state');
    //
    //   }).catch((ex) => {
    //     console.log('An error occured while parsing!', ex)
    //   });
  }



  render() {
    // const locationRoutes = conditions.map((item, index) => (
    //   <Route
    //     path={`/location/${item.location.replace(/ /g,'')}`} key={index} component={ () => (<Location conditions={conditions[index]}/>)}
    //   />
    // ))
    const conditionsAll = this.state.locations.first.conditions;

    const times = conditionsAll.map((item, index) => (
      <h2 key={index}>{item.timestamp}</h2>
    ));

    return (
      <Router>
        <div className="App">
          <nav className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Surf Alert</h1>
            <h2>{this.state.locations.first.location}</h2>
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
          {/* <Route exact path="/" component={
            () => (<Home conditions={this.state.conditions} locations={this.state.locations} />
            )} />
            <Route path="/locations" component={
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
