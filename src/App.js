import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import conditions from './data/conditions';
import Home from './containers/Home';
import ConditionReport from './components/ConditionReport';
import './assets/css/App.css';

const App = () => (
  <Router>
    <div>
      <nav className="App-header">
        <ul>
          <Link to="/">Home</Link>{' '}
          {/* <Link to="/profile">Profile</Link>{' '} */}
          <Link to="/conditions">Location</Link>
        </ul>
      </nav>
      <Route exact path="/" component={
        () => (<Home conditions={conditions} />
        )} />
      {/* <Route path="/profile" component={
        () => (<Profile experiencesList={experiencesList}/>
      )} /> */}
      <Route path="/conditions" component={
        () => (<ConditionReport conditions={conditions}/>
        )} />
    </div>
  </Router>
)

export default App;
