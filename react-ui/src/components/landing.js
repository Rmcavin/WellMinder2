import React, { Component } from 'react';
import { Redirect } from 'react-router';
import firebase from 'firebase';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', user: '', error: '' }
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
    }

  onLoginPress(e) {
    const provider = new firebase.auth.GoogleAuthProvider();
    e.preventDefault();
    console.log('Sign Up button pushed');
    firebase.auth().signInWithRedirect(provider)
    .then((result) => {
      console.log(result);
      const user = result.user;
      this.setState({ user });
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          <Redirect to='/dashboard' />
        }
      });
    })
    .catch(() => {
        this.setState({ error: 'Authentication failed.' });
    });
}

  //   onSignupPress(e) {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     e.preventDefault();
  //     console.log('Sign Up button pushed');
  //     firebase.auth().signInWithPopup(provider)
  //   .then((result) => {
  //     console.log(result);
  //     const user = result.user;
  //     this.setState({
  //       user
  //     });
  //   })
  //     .catch(() => {
  //         this.setState({ error: 'Authentication failed.' });
  //     });
  // }

  render() {
    return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={event => this.onEmailChange(event.target.value)} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={event => this.onPasswordChange(event.target.value)} />
        <button
          onClick={this.onLoginPress.bind(this)}>Log In
        </button>
      </form>
    </div>
  )}
}

export default Landing;
