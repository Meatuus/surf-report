// import React, { Component } from 'react';
// import logo from './assets/logo.svg';
// import './assets/css/App.css';
// import conditions from './data/conditions';
// import ConditionReport from './components/ConditionReport';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import conditions from './data/conditions';
import Home from './components/Home';
import ConditionReport from './components/ConditionReport';
// import Experience from './Experience';
// import Accommodation from './Accommodation';
import './assets/css/App.css';
import logo from './assets/logo.svg';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <ConditionReport swellHeightMin={conditions.swell.minBreakingHeight}
//           swellHeightMax={conditions.swell.maxBreakingHeight}
//           swellUnit={conditions.swell.unit}
//           swellDirection={conditions.swell.components.combined.compassDirection}
//           windSpeed={conditions.wind.speed}
//           windDirection={conditions.wind.compassDirection}
//           windUnit={conditions.wind.unit}
//           temperature={conditions.condition.temperature}
//           temperatureUnit={conditions.condition.unit}
//         />
//       </div>
//     );
//   }
// }

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
