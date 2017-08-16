import React, {Component} from 'react';
import HomeConditions from '../components/HomeConditions';
import logo from '../assets/logo.svg';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conditionsArray: this.props.conditions
    }
  }

  render() {
    let conditionsArray = this.state.conditionsArray

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HomeConditions conditionsArray={conditionsArray} />
      </div>
    );
  }
}

export default Home;
