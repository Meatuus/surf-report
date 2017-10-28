import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import baseData from './data/baseData';
import Home from './containers/Home';
// import DropDown from './components/DropDown';
import Profile from './containers/Profile';
import Login from './containers/Login';
import CreateUser from './components/CreateUser';
import Location from './containers/Location'
import './assets/css/App.css';
import logo from './assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false,
      username: "",
      conditionsOne: baseData,
      conditionsTwo: baseData,
      conditionsThree: baseData,
      loading: true,
    }

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    // this.handleAlertLocationInput = this.handleAlertLocationInput.bind(this);
    // this.handleAlertCheckboxInput = this.handleAlertCheckboxInput.bind(this);
    // this.handleAlertSwellMinInput = this.handleAlertSwellMinInput.bind(this);
    // this.handleAlertSwellMaxInput = this.handleAlertSwellMaxInput.bind(this);
    // this.handleAlertWindDirectionInput = this.handleAlertWindDirectionInput.bind(this);

    // this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);

    // this.getSelected = this.getSelected.bind(this);
  }

  loadCommentsFromServer() {
    Promise.all([
      axios.get(this.props.urlFirst),
      axios.get(this.props.urlSecond),
      axios.get(this.props.urlThird)
    ]).then((res) => {
      this.setState({
        conditionsOne: res[0].data,
        conditionsTwo: res[1].data,
        conditionsThree: res[2].data,
        loading: false,
      });
    });
  }

  handleUserLogin(username) {
    this.setState({ username: username, currentUser: true })
  }

  handleSignOut(e) {
    this.setState({
      username: "",
      currentUser: false
    })
  }

  // handleCommentSubmit(user) {
  //   // let comments = this.state.data;
  //   // comment.id = Date.now();
  //   // let newComments = comments.concat([comment]);
  //   // this.setState({ data: newComments });
  //
  //   axios.post("http://localhost:3001/createUser", user)
  //     .catch(err => {
  //       console.error(err);
  //       // this.setState({ user: comments });
  //     });
  // }

  // handleUserInput(e) {
  //   // create clone of fields object using ES6 spread operator
  //   let user = {...this.state.user};
  //   // update specified key in the fields object using the input's name attribute
  //   user[e.target.name] = e.target.value;
  //   this.setState({ user });
  //
  // }

  // handleAlertLocationInput(location) {
  //   this.setState({alertLocation: location});
  // }
  //
  // handleAlertCheckboxInput(alert) {
  //   this.setState({alertCheckbox: alert});
  // }
  //
  // handleAlertSwellMinInput(alertSwellMin) {
  //   this.setState({alertSwellMin: alertSwellMin});
  // }
  //
  // handleAlertSwellMaxInput(swellMax) {
  //   this.setState({alertSwellMax: swellMax});
  // }
  //
  // handleAlertWindDirectionInput(WindDirection) {
  //   this.setState({alertWindDirection: WindDirection});
  // }
  // getSelected() {
  //   console.log('dropdown click');
  //   const locationNames = [ this.props.first, this.props.second, this.props.third ];
  //   // const colours = this.props.colours
  //   const selectedLocation = this.props.params.colour;
  //
  //   // Find the option matching the route param, or
  //   // return a default value when the colour is not found
  //   return find(colours, { value: selectedColour }) || colours[0];
  // }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    const { conditionsOne, conditionsTwo, conditionsThree, currentUser } = this.state;
    const { first, second, third } = this.props;
    const locationNames = [ first, second, third ];

    const signOut = currentUser ? (
      <div>
        <li><Link to="/profile">Profile</Link></li>
        <li>{' '}<Link to="/" onClick={this.handleSignOut}>Sign Out</Link></li>
      </div>
    ) : (
      <div>
        <li><Link to="/login">Sign In</Link></li>
        <li>{' '}<Link to="/signup">Sign Up</Link></li>
      </div>
    )

    const dropDown = () => {
      console.log('clicked');
    //   <DropDown options={locationNames} />
    }

    return (
      	<Router>	
			<div className="App">
				<nav className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Surf Alert</h1>

					<ul>
						<li><Link to="/">Home</Link>{' '}</li>
						<li onClick={dropDown}>Locations{' '}</li>
						<li><Link to={`/location/${first.replace(/ /g, '_')}`}>{first}</Link>{' '}</li>
						<li><Link to={`/location/${second.replace(/ /g, '_')}`}>{second}</Link>{' '}</li>
						<li><Link to={`/location/${third.replace(/ /g, '_')}`}>{third}</Link></li>
						{signOut}
					</ul>
				</nav>
				<Route exact path="/" component={
					() => (<Home
					locationOneConditions={conditionsOne}
					locationOneName={first}
					locationTwoConditions={conditionsTwo}
					locationTwoName={second}
					locationThreeConditions={conditionsThree}
					locationThreeName={third}
						/>
					)} />
				<Route
					path={`/location/${first.replace(/ /g,'_')}`} component={ () => (<Location location="Shelly Beach" conditions={conditionsOne}/>)}
				/>
				<Route
					path={`/location/${second.replace(/ /g,'_')}`} component={ () => (<Location location="Ballina" conditions={conditionsTwo} />)}
				/>
				<Route
					path={`/location/${third.replace(/ /g,'_')}`} component={ () => (<Location location="Byron Bay" conditions={conditionsThree} />)}
				/>
				<Route
					path="/login" component={ () => (
					currentUser ? (
						<Redirect to="/profile" />
					) : (
						<Login onLogin={this.handleUserLogin} />
					)
					)}
				/>
				<Route
					path="/signup" component={ () => (
					currentUser ? (
						<Redirect to="/profile" />
					) : (
						<CreateUser onLogin={this.handleUserLogin} onCommentSubmit={ this.handleCommentSubmit } />
					)
					)}
				/>
				<Route path="/profile"
					component={ () => (
					currentUser ? (
						<Profile
						user={this.state.username}
						locations={[first, second, third]}
						/>
					) : (
						<Redirect to="/login" />
					)

					)}
				/>
			</div>
      	</Router>
    );
  }
}

export default App;
