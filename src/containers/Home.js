import React from 'react';
import {Link} from 'react-router-dom';
import CurrentConditions from '../components/CurrentConditions';

const Home = (props) => (
  <div>
    <h3>Home Page</h3>
    <div>
      <ul>
        <Link to={`/location/${props.locationOneName.replace(/ /g,'_')}`}>Location: {props.locationOneName}</Link>{' '}
        <Link to={`/location/${props.locationTwoName.replace(/ /g,'_')}`}>Location: {props.locationTwoName}</Link>{' '}
        <Link to={`/location/${props.locationThreeName.replace(/ /g,'_')}`}>Location: {props.locationThreeName}</Link>
      </ul>
    </div>
    <div>
      <h1>{props.locationOneName}</h1>
      <CurrentConditions conditions={props.locationOneConditions}/>
    </div>
    <div>
      <h1>{props.locationTwoName}</h1>
      <CurrentConditions conditions={props.locationTwoConditions}/>
    </div>
    <div>
      <h1>{props.locationThreeName}</h1>
      <CurrentConditions conditions={props.locationThreeConditions}/>
    </div>
  </div>
);

export default Home;
