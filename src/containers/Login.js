import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

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
      if (res.data.password === password) {
        console.log('passwords match');
        this.props.onLogin(username);
      }
      console.log(`response:: ${res.data.username}, ${res.data.password}`);
    }).catch(err => {
      console.error(`errors:: ${err}`);
    })
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Login Page</h2>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='User Name'
            value={ username }
            onChange={ this.handleUserChange }
          />
          <input
            type='password'
            placeholder='Password'
            value={ password }
            onChange={ this.handlePasswordChange }
          />
          <input
            type='submit'
            value='Post'
          />
        </form>
      </div>
    )
  }
}

export default Login;
