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
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handlePreferences = this.handlePreferences.bind(this);

    this.state = { isLoggedIn: false, user: null, prefs: null }
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

  componentDidMount() {
    console.log("Component mounted state", this.state);
  }

  componentDidUpdate() {
    console.log("State from app-level component:", this.state);
  }

  handleAuth(user) {
    this.setState({ isLoggedIn: true, user: user.user});
  }

  handleSignOut(result){
    console.log('******handleSignOut******');
    this.setState({ isLoggedIn: false, user: result });
  }

  handlePreferences(prefs) {
    console.log(prefs);
    this.setState({ prefs: prefs });
  }

  render() {
    return (
      <div className='App'>
        <Navbar isLoggedIn={this.state.isLoggedIn} handleSignOut={this.handleSignOut} />
        { !this.state.isLoggedIn ? <Route exact path='/' render={(props) => <Landing handleAuth={this.handleAuth} {...props}/>} /> : <Redirect to='/dashboard' /> }
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/preferences' render={(props) => <Preferences handlePreferences={this.handlePreferences} {...props} />} />
        <Route path='/checkin' component={Quiz} />
      </div>
    );
  }
}

export default App;
