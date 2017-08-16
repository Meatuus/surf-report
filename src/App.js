import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import conditions from './data/conditions';
import Home from './containers/Home';
import Locations from './containers/Locations'
import './assets/css/App.css';

const App = () => (
  <Router>
    <div>
      <nav className="App-header">
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
      {/* <Route path="/profile" component={
        () => (<Profile experiencesList={experiencesList}/>
      )} /> */}
    </div>
  </Router>
)

export default App;
