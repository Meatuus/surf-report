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
// import Locations from './containers/Locations'
import Location from './containers/Location'
import './assets/css/App.css';
import logo from './assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      conditionsOne: baseData,
      conditionsTwo: baseData,
      conditionsThree: baseData,
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
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

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
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
