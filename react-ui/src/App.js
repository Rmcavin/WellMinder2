import React, { Component } from 'react';
import firebase from 'firebase';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Landing from './components/landing'
import Preferences from './components/preferences'
import Quiz from './components/quiz'
import './App.css';
import { scoreCalc, tierCalc } from './tiers_calc';

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
  }

  componentDidUpdate() {
    if (this.state.user && this.state.user.userData) {
      this.writeUserData()
    }
  }

  writeUserData() {
    let userId = firebase.auth().currentUser.uid;
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
        quizData: [
          {date: new Date("2017-11-30T23:49:06.125Z"), sleep: 3, diet: 4, activity: 2, emotional: 3, social: 2, occupational: 1, spiritual: 2, intellectual: 1},
          {date: new Date("2017-12-01T23:49:06.125Z"), sleep: 2, diet: 3, activity: 4, emotional: 2, social: 4, occupational: 4, spiritual: 4, intellectual: 3},
          {date: new Date("2017-12-02T23:49:06.125Z"), sleep: 4, diet: 5, activity: 4, emotional: 3, social: 2, occupational: 1, spiritual: 2, intellectual: 1},
          {date: new Date("2017-12-03T23:49:06.125Z"), sleep: 3, diet: 2, activity: 3, emotional: 4, social: 5, occupational: 3, spiritual: 4, intellectual: 5},
          {date: new Date("2017-12-04T23:49:06.125Z"), sleep: 4, diet: 2, activity: 1, emotional: 5, social: 3, occupational: 5, spiritual: 2, intellectual: 4},
          {date: new Date("2017-12-05T23:49:06.125Z"), sleep: 4, diet: 3, activity: 2, emotional: 5, social: 3, occupational: 4, spiritual: 3, intellectual: 2},
          {date: new Date("2017-12-06T23:49:06.125Z"), sleep: 5, diet: 3, activity: 2, emotional: 3, social: 4, occupational: 2, spiritual: 3, intellectual: 4},
          {date: new Date("2017-12-07T23:49:06.125Z"), sleep: 3, diet: 3, activity: 2, emotional: 3, social: 2, occupational: 4, spiritual: 3, intellectual: 2}
        ]
      }
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + userId).set(user.userData);
    }
    else {
      user.userData = snap.val()
    }
    this.setState({user:user})
  }

  //GET THE DATA SNAPSHOT FROM THE SERVER
  handleAuth(user) {
    this.setState({ isLoggedIn:true, user:user}, () => {
      let userId = firebase.auth().currentUser.uid;
      let serverRef = firebase.database().ref('users/' + userId).once('value').then(this.getSnap);
    })
  }

  handleSubmit(data) {
    let q = this.state.user;
    q.userData.quizData.push(data);
    q.userData.currentScores = scoreCalc(data, q.userData.currentScores);
    q.userData.tiers = tierCalc(q.userData.currentScores);
    this.setState({ user: q });
  }

  handleSignOut(){
    this.setState({ isLoggedIn: false, user: null });
    window.location.href="/";
  }

  handlePreferences(prefs) {
    let user = this.state.user;
    user.userData.preferences = prefs;
    this.setState({ user: user });
  }

  render() {
    return (
      <div className='App'>
        <Navbar isLoggedIn={this.state.isLoggedIn} handleSignOut={this.handleSignOut} />
        <Route exact path='/' render={(props) => <Landing {...props} handleAuth={this.handleAuth} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />}/>
        <Route path='/dashboard' render={(props) => <Dashboard {...props} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />}/>
        <Route path='/preferences' render={(props) => <Preferences {...props} handlePreferences={this.handlePreferences} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />}/>
        <Route path='/checkin' render={(props) => <Quiz {...props} quizUpdate={this.handleSubmit} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />}/>
      </div>
    );
  }
}

export default App;
