import React, {Component} from 'react';
import HomeConditions from '../components/HomeConditions';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conditionsArray: this.props.conditions
    }
  }

  render() {
    let conditionsArray = this.state.conditionsArray

    let conditionsLocation = conditionsArray.map((item, index) => (
      <HomeConditions conditions={conditionsArray[index]} key={index} />
    ));

    return (
      <div>
        <h3>Home Page</h3>
        {conditionsLocation}
      </div>
    );
  }
}

export default Home;
