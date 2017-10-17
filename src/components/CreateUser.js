import React, {Component} from 'react';
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', originalUser: '' };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;

    if (!username || !password) {
      return;
    }

    axios.get(`http://localhost:3001/api/users/${username}`, {
      username: username,
    }).then(res => {
      // console.log(`response:: ${res.data.username}, ${res.data.password}`);
      console.log(res.data);
      if (res.data === null) {
        this.setState({originalUser: true});
        axios.post("http://localhost:3001/api/users", {
          username: username,
          password: password,
          alert: false,
          location: 1,
          swellMin: 0,
          swellMax: 0,
          wind: 0,
          })
          .then(response => {
            this.props.onLogin(username);
            console.log(`response:: ${response}`);
          })
          .catch(err => {
            console.error(`errors:: ${err}`);
          });
          this.setState({ username: '', password: '' });
      } else {
        this.setState({originalUser: false})
      }
    }).catch(err => {
      console.error(`errors:: ${err}`);
    })
  }

  render() {
    const original = this.state.originalUser === false ? <p>Username is taken</p> : null;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='User Name'
          value={ this.state.username }
          onChange={ this.handleUserChange }
        />
        <input
          type='password'
          placeholder='Password'
          value={ this.state.password }
          onChange={ this.handlePasswordChange }
        />
        <input
          type='submit'
          value='Post'
        />
        {original}
      </form>
    )
  }
}

export default CreateUser;
