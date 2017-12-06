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

    onSignIn(e) {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = firebase.auth();
      auth.signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        this.setState({ user });
        var credential = result.credential;
        var operationType = result.operationType;
        console.log(result);
        window.location='/dashboard';
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
        <div className="g-signin2 buttons" data-onsuccess="onSignIn" data-redirecturi="/dashboard" onClick={this.onSignIn.bind(this)}></div>
      </form>
    </div>
  )}
}

export default Landing;
