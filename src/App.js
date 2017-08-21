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
      conditions: ""
    }
  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
    .then(res => {
      this.setState({ conditions: res.data });
    })
    // TODO: sort past times and remove from data
    // TODO: break up conditions state into current and future array
  }

  componentDidMount() {
    this.loadCommentsFromServer();
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

    return (
      <Router>
        <div className="App">
          <nav className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Surf Alert</h1>
            <p>{this.state.conditions}</p>

            <ul>
              <Link to="/">Home</Link>{' '}
              <Link to="/locations">Locations</Link>
              {/* <Link to="/profile">Profile</Link>{' '} */}
            </ul>
          </nav>
          <Route exact path="/" component={
            () => (<Home conditions={conditions} />
            )} />
          <Route path="/locations" component={
            () => (<Locations conditions={conditions}/>
            )} />
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
