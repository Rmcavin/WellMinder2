import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Landing from './components/landing'
import Preferences from './components/preferences'
import Quiz from './components/quiz'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSnap = this.getSnap.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);

    this.state = { isLoggedIn: false, user: null }
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBc5KaDNcBS3wWN1kTVtWTGgi2MVjGgZko",
      authDomain: "wellminder-7beb4.firebaseapp.com",
      databaseURL: "https://wellminder-7beb4.firebaseio.com",
      projectId: "wellminder-7beb4",
      storageBucket: "wellminder-7beb4.appspot.com",
      messagingSenderId: "707860039026"
    };
    firebase.initializeApp(config);
    const database = firebase.database();
  }

  componentDidUpdate() {
    console.log("State from app-level component:", this.state);
    console.log("userId",this.state.user.user.uid)
    //db needs to update now
    //writeUserData(this.state)
  }

  getSnap(snap) {
    let user = this.state.user;

    if (!snap.val()) {
      user.userData = {
        preferences: {"sleep": true, "diet": true, "activity": true, "emotional": true, "social": true, "occupational": true, "spiritual": true, "intellectual": true}
      }
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + userId).set(user.userData);
    }
    else {
      user.userData = snap.val()
    }
    this.setState({user:user})
    console.log('updated state from server', this.state)
  }

  handleAuth(user) {
    this.setState({ isLoggedIn:true, user:user}, () => {
      let userId = firebase.auth().currentUser.uid;
      let serverRef = firebase.database().ref('users/' + userId).once('value').then(this.getSnap);
    })
  }

  handleSubmit(data) {
    //event.preventDefault();
    //this.state.user.quizData.push(data);
    //this.setState({user: updates)
    console.log('app level state!!',this.state);
    console.log('the data', data);
  }


  handleSignOut(){
    this.setState({ isLoggedIn: false, user: null });
  }

  writeUserData(data) {
    firebase.database().ref('users/' + this.state.user.user.uid).set(data);
  }

  render() {
    return (
      <div className='App'>
        <Navbar isLoggedIn={this.state.isLoggedIn} handleSignOut={this.handleSignOut}/>
        { !this.state.isLoggedIn ? <Route exact path='/' render={(props) => <Landing handleAuth={this.handleAuth} user={this.state.user}{...props}/>} /> : <Redirect to='/dashboard' /> }
        <Route path='/dashboard' render={(props) => <Dashboard {...props} user={this.state.user}/>}/>
        <Route path='/preferences' render={(props) => <Preferences {...props} user={this.state.user}/>}/>
        <Route path='/checkin' render={(props) => <Quiz {...props} quizUpdate={this.handleSubmit}/>}/>
      </div>
    );
  }
}

export default App;
