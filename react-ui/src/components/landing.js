import React, { Component } from 'react';
import { Redirect } from 'react-router';
import firebase from 'firebase';

class Landing extends Component {
  constructor(props) {
    super(props);
    console.log("Landing props:", props);
    this.onSignIn = this.onSignIn.bind(this);

    this.state = { email: '', password: '', error: '' }
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
    }

    onSignIn(e) {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = firebase.auth();
      auth.signInWithPopup(provider)
      .then((result) => {
        this.props.handleAuth(result);
      }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential)
        });
  }

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
        <div className="g-signin2 buttons" data-onsuccess="onSignIn" onClick={this.onSignIn}></div>
      </form>
    </div>
  )}
}

export default Landing;
