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
    //db needs to update now
  }

  handleAuth(user) {
    console.log("handleAuth", user);
    this.setState({ isLoggedIn: true, user:user});
  }

  handleSubmit = (data) => {
    //event.preventDefault();
    //let updates = {quizData: data}
    //this.setState({user: updates)
    console.log('app level state!!',this.state);
    console.log('the data', data);
  }

  render() {
    return (
      <div className='App'>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        { !this.state.isLoggedIn ? <Route exact path='/' render={(props) => <Landing handleAuth={this.handleAuth} {...props}/>} /> : <Redirect to='/dashboard' /> }
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/preferences' component={Preferences} />
        <Route path='/checkin' render={(props) => <Quiz {...props} quizUpdate={this.handleSubmit}/>}/>
      </div>
    );
  }
}

export default App;
