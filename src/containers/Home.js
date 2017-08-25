import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CurrentConditions from '../components/CurrentConditions';

class Home extends Component {
  constructor(props) {
    super(props)
  //
  //   this.state = {
  //     // conditionsArray: this.props.conditions
  //     locationsArray: this.props.locationFirst
  //   }
  }

  render() {

    return (
      <div>
        <h3>Home Page</h3>
        <div>
          <ul>
            <Link to={`/location/${this.props.locationOneName.replace(/ /g,'_')}`}>Location: {this.props.locationOneName}</Link>{' '}
            <Link to={`/location/${this.props.locationTwoName.replace(/ /g,'_')}`}>Location: {this.props.locationTwoName}</Link>{' '}
            <Link to={`/location/${this.props.locationThreeName.replace(/ /g,'_')}`}>Location: {this.props.locationThreeName}</Link>
          </ul>
        </div>
        <div>
          <h1>{this.props.locationOneName}</h1>
          <CurrentConditions conditions={this.props.locationOneConditions}/>
        </div>
        <div>
          <h1>{this.props.locationTwoName}</h1>
          <CurrentConditions conditions={this.props.locationTwoConditions}/>
        </div>
        <div>
          <h1>{this.props.locationThreeName}</h1>
          <CurrentConditions conditions={this.props.locationThreeConditions}/>
        </div>
      </div>
    );
  }
}

export default Home;
