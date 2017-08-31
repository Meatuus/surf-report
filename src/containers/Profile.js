import React, {Component} from 'react';
import ProfileInput from '../components/ProfileInput';
import axios from 'axios';

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

    // this.handleAlertLocationInputChange = this.handleAlertLocationInputChange.bind(this);
    // this.handleAlertCheckboxInputChange = this.handleAlertCheckboxInputChange.bind(this);
    // this.handleAlertSwellMinInputChange = this.handleAlertSwellMinInputChange.bind(this);
    // this.handleAlertSwellMaxInputChange = this.handleAlertSwellMaxInputChange.bind(this);
    // this.handleAlertWindDirectionInputChange = this.handleAlertWindDirectionInputChange.bind(this);
    // this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAlertCheckboxInput = this.handleAlertCheckboxInput.bind(this);
    this.handleUserLoad = this.handleUserLoad.bind(this);
    this.handleAlertSubmit = this.handleAlertSubmit.bind(this);
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

  handleAlertSubmit(e) {
    e.preventDefault();
    const { username, alertLocation, alertCheckbox, alertSwellMin, alertSwellMax, alertWindDirection } = this.state.user;

    axios.put(`http://localhost:3001/api/users/${username}`, {
      username: username,
      alert: alertCheckbox,
      SwellMin: alertSwellMin,
      SwellMax: alertSwellMax,
      wind: alertWindDirection,
      location: alertLocation,
    }).then(res => {
      // let alert = res.data.alert === 0 ? false : true;
      // this.setState({
      //   user: {
      //     username: res.data.username,
      //     alertLocation: res.data.location,
      //     alertCheckbox: alert,
      //     alertSwellMin: res.data.SwellMin,
      //     alertSwellMax: res.data.SwellMax,
      //     alertWindDirection: res.data.wind,
      //   }
      // })
      console.log(`saved user:: ${res.data.username}`);
    }).catch(err => {
      console.error(`errors:: ${err}`);
    })
  }

  // handleAlertLocationInputChange(e) {
  //   console.log(e.target);
  //   this.props.onAlertLocationInput(e.target.value);
  // }
  //
  // handleAlertCheckboxInputChange(e) {
  //   this.props.onAlertCheckboxInput(e.target.checked);
  // }
  //
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

  handleUserLoad() {
    let user = this.props.user;

    axios.get(`http://localhost:3001/api/users/${user}`, {
      username: user,
    }).then(res => {
      let alert = res.data.alert === 0 ? false : true;
      this.setState({
        user: {
          username: res.data.username,
          alertLocation: res.data.location,
          alertCheckbox: alert,
          alertSwellMin: res.data.SwellMin,
          alertSwellMax: res.data.SwellMax,
          alertWindDirection: res.data.wind,
        }
      })
      console.log(`response:: ${res.data.username}, ${res.data.password}`);
    }).catch(err => {
      console.error(`errors:: ${err}`);
    })
  }

  componentWillMount() {
    this.handleUserLoad();
  }

  render() {
    const locationSearch = this.props.locations

    const dropdown = locationSearch.map( (item, index) => (
      <option value={item} key={index}>{item}</option>
    ))

    return(
      <div>
        <form onSubmit={this.handleAlertSubmit}>
          <h2>Profile Page :: {this.state.user.username}</h2>

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
            value={this.state.user.alertWindDirection}
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
