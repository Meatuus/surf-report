import React, {Component} from 'react';
import axios from 'axios';

class CreateUser extends Component {
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

    axios.post("http://localhost:3001/api/users", {
      username: username,
      password: password,
      })
      .then(response => {
        console.log(`response:: ${response}`);
      })
      .catch(err => {
        console.error(`errors:: ${err}`);
      });
      this.setState({ username: '', password: '' });

    // this.props.onCommentSubmit({ user: user, password: password });
    // fetch("http://localhost:3001/api/users", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   })
    // })
    //   .then((response) => {
    //     return response.json()
    //   }).then((json) => {
    //     console.log('JSON from the ISS', json)
    //     this.setState({ user: '', password: '' });
    //   }).catch((ex) => {
    //     console.log('An error occured while parsing!', ex)
    //   });
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
    )
  }
}

export default CreateUser;
