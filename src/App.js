import React, { Component } from 'react';
import firebase from 'firebase';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Landing from './components/landing'
import Preferences from './components/preferences'
import Quiz from './components/quiz'
import './App.css';

class App extends Component {
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

  render() {
    return (
      <div className=“App”>
        <Navbar />
        <Route exact path=‘/’ component={Landing}/>
        <Route path=‘/dashboard’ component={Dashboard} />
        <Route path=‘/preferences’ component={Preferences}/>
        <Route path=‘/checkin’ component={Quiz} />
      </div>
    );
  }
}

export default App;
