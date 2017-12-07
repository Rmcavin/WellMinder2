import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Redirect, Switch } from 'react-router-dom'
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
    this.handlePreferences = this.handlePreferences.bind(this);

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

  // componentDidMount() {
  //   console.log("Component mounted state", this.state);
  // }
  //
  componentDidUpdate() {
    console.log("State from app-level component:", this.state.user);
    console.log("userId",this.state.user.user.uid)
    if (this.state.user.userData) {
      this.writeUserData()
    }
  }

  writeUserData() {
    let userId = firebase.auth().currentUser.uid;
    // let updates = {}
    // if (this.state.user.userData.preferences) {
    //   updates.preferences = this.state.user.userData.preferences;
    // }
    // if (this.state.user.userData.tiers) {
    //   updates.tiers = this.state.user.userData.tiers;
    // }
    // if (this.state.user.userData.currentScores) {
    //   updates.currentScores = this.state.user.userData.currentScores;
    // }
    // if (this.state.user.userData.quizData) {
    //   updates.quizData = this.state.user.userData.quizData;
    // }
    // let pairs = Object.entries(updates)
    // console.log('THE PAIRS',pairs)

    firebase.database().ref('users/' + userId).update({
      preferences: this.state.user.userData.preferences,
      tiers: this.state.user.userData.tiers,
      currentScores: this.state.user.userData.currentScores,
      quizData: this.state.user.userData.quizData});
}


  //UPDATE USER STATE WITH SERVER DATA
  getSnap(snap) {
    let user = this.state.user;
    if (!snap.val()) {
      user.userData = {
        currentScores: {"streak": 0, "total": 0, "sleep": 0, "diet": 0, "activity": 0, "emotional": 0, "social": 0, "occupational": 0, "spiritual": 0, "intellectual": 0},
        tiers: {"streak": "level one", "total": "level one", "sleep": "level one", "diet": "level one", "activity": "level one", "emotional": "level one", "social": "level one", "occupational": "level one", "spiritual": "level one", "intellectual": "level one"},
        preferences: {"sleep": true, "diet": true, "activity": true, "emotional": true, "social": true, "occupational": true, "spiritual": true, "intellectual": true},
        quizData: {date: null, sleep: 0, diet: 0, activity: 0, emotional: 0, social: 0, occupational: 0, spiritual: 0, intellectual: 0},
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

  //GET THE DATA SNAPSHOT FROM THE SERVER
  handleAuth(user) {
    this.setState({ isLoggedIn:true, user:user}, () => {
      let userId = firebase.auth().currentUser.uid;
      let serverRef = firebase.database().ref('users/' + userId).once('value').then(this.getSnap);
    })
  }

  handleSubmit(data) {
    console.log('user at the time of quiz',this.state.user)
    console.log('user quiz data at app', data)
  }

  handleSignOut(result){
    this.setState({ isLoggedIn: false, user: result });
  }

  handlePreferences(prefs) {
    let user = this.state.user;
    user.userData.preferences = prefs;
    this.setState({ user: user });
  }

  render() {
    return (
      <div className='App'>
        <Navbar isLoggedIn={this.state.isLoggedIn} handleSignOut={this.handleSignOut}/>
        <Route exact path='/' render={(props) => <Landing {...props} handleAuth={this.handleAuth} user={this.state.user} />}/>
        <Route path='/dashboard' render={(props) => <Dashboard {...props} user={this.state.user}/>}/>
        <Route path='/preferences' render={(props) => <Preferences {...props} handlePreferences={this.handlePreferences} user={this.state.user} />}/>
        <Route path='/checkin' render={(props) => <Quiz {...props} quizUpdate={this.handleSubmit} user={this.state.user} />}/>
      </div>
    );
  }
}

export default App;
