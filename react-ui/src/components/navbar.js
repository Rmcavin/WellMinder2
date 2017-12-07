import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.state = {
      active: false,
      user: ''
    };
  }
    toggleClass() {
      this.setState({active: !this.state.active})
    }

    onSignOut() {
      console.log('is this happening?');
      firebase.auth().signOut()
        .then((result) => {
          this.props.handleSignOut(result);
        });
    }

  render() {
    if (this.props.isLoggedIn) {
      return (
      <header className="titleBar">
        <h1 className="title">WellMinder</h1>
        <div className="menu" onClick={this.toggleClass}><i className="fa fa-bars" aria-hidden="true"></i></div>
          <ul className = {this.state.active ? "dropdown active" : "dropdown inactive"}>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/checkin">Daily Check In</Link></li>
            <li><Link to="/preferences">User Preferences</Link></li>
            <li><Link to="/" onClick={() => { this.onSignOut }}>Sign out</Link></li>
          </ul>
      </header>
      )
    }
    return (
    <header className="titleBar">
      <h1 className="title">WellMinder</h1>
      <div className="menu" onClick={this.toggleClass}><i className="fa fa-bars" aria-hidden="true"></i></div>
        <ul className = {this.state.active ? "dropdown active" : "dropdown inactive"}>
          <li><Link to="/">Please sign in to access all WellMinder features.</Link></li>
        </ul>
    </header>
  )}
}

export default NavBar;
