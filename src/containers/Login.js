import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

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

    // axios.post("http://localhost:3001/api/users", {
    //   username: username,
    //   password: password,
    //   })
    //   .then(response => {
    //     console.log(`response:: ${response}`);
    //   })
    //   .catch(err => {
    //     console.error(`errors:: ${err}`);
    //   });
    //   this.setState({ username: '', password: '' });

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

  render() {
    return (
      <div>
        <h2>Login Page</h2>
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
        </form>
      </div>
    )
  }
}

export default Login;
