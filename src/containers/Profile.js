import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleAlertLocationInputChange = this.handleAlertLocationInputChange.bind(this);
    this.handleAlertCheckboxInputChange = this.handleAlertCheckboxInputChange.bind(this);
    this.handleAlertSwellMinInputChange = this.handleAlertSwellMinInputChange.bind(this);
    this.handleAlertSwellMaxInputChange = this.handleAlertSwellMaxInputChange.bind(this);
    this.handleAlertWindDirectionInputChange = this.handleAlertWindDirectionInputChange.bind(this);
  }

  handleAlertLocationInputChange(e) {
    console.log(e.target);
    this.props.onAlertLocationInput(e.target.value);
  }

  handleAlertCheckboxInputChange(e) {
    this.props.onAlertCheckboxInput(e.target.checked);
  }

  handleAlertSwellMinInputChange(e) {
    console.log(e.target.value);
    this.props.onAlertSwellMinInput(e.target.value);
  }

  handleAlertSwellMaxInputChange(e) {
    this.props.onAlertSwellMaxInput(e.target.value);
  }

  handleAlertWindDirectionInputChange(e) {
    this.props.onAlertWindDirectionInput(e.target.value);
  }

  // handleChange(e) {
  //   let newState = {};
  //
  //   newState[e.target.name] = e.target.value;
  //
  //   this.setState(newState);
  // }

  render() {
    const locationSearch = this.props.locations

    const dropdown = locationSearch.map( (item, index) => (
      <option value={item} key={index}>{item}</option>
    ))

    return(
      <form>
        <h2>Profile Page</h2>
        {/* <input
          type="text"
          placeholder="Choose Location"
          value={this.props.alertLocation}
          onChange={this.handleAlertLocationInputChange}
        /> */}
        <p>
          <input
            type="checkbox"
            checked={this.props.alertCheckbox}
            onChange={this.handleAlertCheckboxInputChange}
          />
          Check to enable alerts
        </p>
        <label htmlFor="alertLocation">
          Select a location
          <select value={this.props.alertLocation} onChange={this.handleAlertLocationInputChange} id="alertLocation">
            <option>All Locations</option>
            {dropdown}
          </select>
        </label>
        <br></br>
        <label htmlFor="alertSwellMin">Enter Min Swell Height</label>
        <input
          type="text"
          placeholder="Min Swell..."
          defaultValue={this.props.alertSwellMin}
          // value={this.props.alertSwellMin}
          onBlur={this.handleAlertSwellMinInputChange}
          id="alertSwellMin"
        />
        <br></br>
        <label htmlFor="alertSwellMax">Enter Max Swell Height</label>
        <input
          type="text"
          placeholder="Max Swell..."
          defaultValue={this.props.alertSwellMax}
          // value={this.props.alertSwellMax}
          onBlur={this.handleAlertSwellMaxInputChange}
          id="alertSwellMax"
        />
        <br></br>
        <label htmlFor="alertWindDirection">Enter Wind Direction</label>
        <input
          type="text"
          placeholder="Wind Direction..."
          defaultValue={this.props.alertWindDirection}
          // value={this.props.alertWindDirection}
          onBlur={this.handleAlertWindDirectionInputChange}
          id="alertWindDirection"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Profile;

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
//     this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
//   }
//
//   handleFilterTextInputChange(e) {
//     this.props.onFilterTextInput(e.target.value);
//   }
//
//   handleInStockInputChange(e) {
//     this.props.onInStockInput(e.target.checked);
//   }
//
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextInputChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockInputChange}
//           />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }
