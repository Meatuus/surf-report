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
import Profile from './containers/Profile';
// import Locations from './containers/Locations'
import Location from './containers/Location'
import './assets/css/App.css';
import logo from './assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertLocation: "",
      alertCheckbox: false,
      conditionsOne: baseData,
      conditionsTwo: baseData,
      conditionsThree: baseData,
      loading: true,
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleAlertLocationInput = this.handleAlertLocationInput.bind(this);
    this.handleAlertCheckboxInput = this.handleAlertCheckboxInput.bind(this);
  }

  loadCommentsFromServer() {
    Promise.all([
      axios.get(this.props.urlFirst),
      axios.get(this.props.urlSecond),
      axios.get(this.props.urlThird)
    ]).then((res) => {
      this.setState({
        conditionsOne: res[0].data,
        conditionsTwo: res[1].data,
        conditionsThree: res[2].data,
        loading: false,
      });
    });
  }

  handleAlertLocationInput(location) {
    this.setState({alertLocation: location});
  }

  handleAlertCheckboxInput(alert) {
    this.setState({alertCheckbox: alert});
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    const { conditionsOne, conditionsTwo, conditionsThree } = this.state;
    const { first, second, third } = this.props;

    return (
      <Router>
        <div className="App">
          <nav className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Surf Alert</h1>

            <ul>
              <Link to="/">Home</Link>{' '}
              {/* <Link to="/locations">Locations</Link> */}
              <Link to="/profile">Profile</Link>{' '}
            </ul>
          </nav>
          <Route exact path="/" component={
            () => (<Home
              locationOneConditions={conditionsOne}
              locationOneName={first}
              locationTwoConditions={conditionsTwo}
              locationTwoName={second}
              locationThreeConditions={conditionsThree}
              locationThreeName={third}
                   />
            )} />
          {/* <Route path="/locations" component={
            () => (<Locations conditions={conditions}/>
          )} /> */}
          <Route
            path={`/location/${first.replace(/ /g,'_')}`} component={ () => (<Location location="Shelly Beach" conditions={conditionsOne}/>)}
          />
          <Route
            path={`/location/${second.replace(/ /g,'_')}`} component={ () => (<Location location="Ballina" conditions={conditionsTwo} />)}
          />
          <Route
            path={`/location/${third.replace(/ /g,'_')}`} component={ () => (<Location location="Byron Bay" conditions={conditionsThree} />)}
          />
          <Route path="/profile"
            component={ () => (
              <Profile
                alertLocation={this.state.alertLocation}
                alertCheckbox={this.state.alertCheckbox}
                locations={[first, second, third]}
                onAlertLocationInput={this.handleAlertLocationInput}
                onAlertCheckboxInput={this.handleAlertCheckboxInput}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
