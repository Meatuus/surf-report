import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleAlertLocationInputChange = this.handleAlertLocationInputChange.bind(this);
    this.handleAlertCheckboxInputChange = this.handleAlertCheckboxInputChange.bind(this);
  }

  handleAlertLocationInputChange(e) {
    this.props.onAlertLocationInput(e.target.value);
    console.log(e);
  }

  handleAlertCheckboxInputChange(e) {
    this.props.onAlertCheckboxInput(e.target.checked);
    console.log(e);
  }

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
            on
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
