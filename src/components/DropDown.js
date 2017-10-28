import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DropDown extends Component {
  // constructor() {
  //
  // }

  render () {
    const options = this.props.options;

    const optionsArray = options.map((item) => (
      <Link to={`/location/${item.replace(/ /g,'_')}`}>Location: {item}</Link>
    ));

    return (
      <div>
        <h1>Dropdown</h1>
        {optionsArray}
      </div>
    )
  }
}

export default DropDown;
