import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import firebase from 'firebase';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.onGoogleSignIn = this.onGoogleSignIn.bind(this);
    this.onEmailSignIn = this.onEmailSignIn.bind(this);

    this.state = { email: '', password: ''}
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
    }

  onEmailSignIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
          console.log("Sign in:", result)
          this.props.handleAuth(result);
        }).catch(() => {
            //Login was not successful, let's create a new account
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((result) => {
                  console.log("Create user:", result)
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
        });
  }

    onGoogleSignIn(e) {
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

    if (this.props.user) {
      return (
        <Redirect to='/dashboard'/>
      )
    }
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
          <div className="buttons">
            <button onClick={this.onEmailSignIn}>Sign in/create account with E-mail</button>
            <div className="g-signin2" data-onsuccess="onSignIn" onClick={this.onGoogleSignIn}></div>
          </div>
      </form>
    </div>
  )}
}

export default Landing;
