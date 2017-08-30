import React, {Component} from 'react';
import ProfileInput from '../components/ProfileInput';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        alertLocation: "",
        alertCheckbox: false,
        alertSwellMin: "",
        alertSwellMax: "",
        alertWindDirection: "",
      }
    }

    this.handleAlertLocationInputChange = this.handleAlertLocationInputChange.bind(this);
    this.handleAlertCheckboxInputChange = this.handleAlertCheckboxInputChange.bind(this);
    // this.handleAlertSwellMinInputChange = this.handleAlertSwellMinInputChange.bind(this);
    // this.handleAlertSwellMaxInputChange = this.handleAlertSwellMaxInputChange.bind(this);
    // this.handleAlertWindDirectionInputChange = this.handleAlertWindDirectionInputChange.bind(this);
    // this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAlertCheckboxInput = this.handleAlertCheckboxInput.bind(this);

  }
  // TODO: on login - fill state with what's in database
  // TODO: on signup - log user in
  // TODO: add put request to update user

  handleUserInput(e) {
    // create clone of fields object using ES6 spread operator
    let user = {...this.state.user};
    // update specified key in the fields object using the input's name attribute
    user[e.target.name] = e.target.value;
    this.setState({ user });

  }

  // handleUserInputChange(e) {
  //   this.props.onUserInput(e);
  // }

  handleAlertLocationInputChange(e) {
    console.log(e.target);
    this.props.onAlertLocationInput(e.target.value);
  }

  handleAlertCheckboxInputChange(e) {
    this.props.onAlertCheckboxInput(e.target.checked);
  }

  handleAlertCheckboxInput(e) {
    let user = {...this.state.user};
    user[e.target.name] = e.target.checked;
    this.setState({ user });
  }

  // handleAlertSwellMinInputChange(e) {
  //   console.log(e.target.value);
  //   this.props.onAlertSwellMinInput(e.target.value);
  // }
  //
  // handleAlertSwellMaxInputChange(e) {
  //   this.props.onAlertSwellMaxInput(e.target.value);
  // }
  //
  // handleAlertWindDirectionInputChange(e) {
  //   this.props.onAlertWindDirectionInput(e.target.value);
  // }

  render() {
    const locationSearch = this.props.locations

    const dropdown = locationSearch.map( (item, index) => (
      <option value={item} key={index}>{item}</option>
    ))

    return(
      <div>
        <form>
          <h2>Profile Page</h2>

          {/* <p>
            <input
            type="checkbox"
            checked={this.props.alertCheckbox}
            onChange={this.handleAlertCheckboxInputChange}
            />
            Check to enable alerts
          </p> */}
          <p>
            <input
              type="checkbox"
              checked={this.state.alertCheckbox}
              onChange={this.handleAlertCheckboxInput}
              name="alertCheckbox"
            />
            Check to enable alerts
          </p>
          {/* <label htmlFor="alertLocation">
            Select a location
            <select value={this.props.alertLocation} onChange={this.handleAlertLocationInputChange} id="alertLocation">
            <option>All Locations</option>
            {dropdown}
            </select>
            </label>
          <br/> */}
          <label htmlFor="alertLocation">
            Select a location
            <select value={this.state.user.alertLocation} name="alertLocation" onChange={this.handleUserInput} id="alertLocation">
              <option>All Locations</option>
              {dropdown}
            </select>
          </label>
          <br/>
          {/* <label htmlFor="alertSwellMin">Enter Min Swell Height</label>
            <input
            type="text"
            placeholder="Min Swell..."
            defaultValue={this.props.alertSwellMin}
            // value={this.props.alertSwellMin}
            onBlur={this.handleAlertSwellMinInputChange}
            id="alertSwellMin"
          /> */}
          <br/>

          <h3>testing results: {this.state.user.alertWindDirection.toUpperCase()}</h3>
          <br/>
          <ProfileInput
            type="text"
            id="swellMin"
            label="Min Swell"
            name="alertSwellMin"
            value={this.state.user.alertSwellMin}
            onChange={this.handleUserInput}
          />
          <br/>
          <ProfileInput
            type="text"
            id="swellMax"
            label="Max Swell"
            name="alertSwellMax"
            value={this.state.user.alertSwellMax}
            onChange={this.handleUserInput}
          />
          <br/>
          <ProfileInput
            type="text"
            id="windDirection"
            label="Wind Direction"
            name="alertWindDirection"
            value={this.state.user.alertWindDirection.toUpperCase()}
            onChange={this.handleUserInput}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
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
