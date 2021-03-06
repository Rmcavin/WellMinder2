import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

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
      firebase.auth().signOut()
        .then((result) => {
          this.props.handleSignOut();
        });
    }

  render() {
    if (this.props.isLoggedIn) {
      return (
      <header className="titleBar">
        <h1 className="title">WellMinder</h1>
        <div className="menu" onClick={this.toggleClass}><i className="fa fa-bars" aria-hidden="true"></i></div>
          <ul className = {this.state.active ? "dropdown active" : "dropdown inactive"}>
            <li><Link to="/dashboard" onClick={this.toggleClass}>Dashboard</Link></li>
            <li><Link to="/checkin" onClick={this.toggleClass}>Daily Check In</Link></li>
            <li><Link to="/preferences" onClick={this.toggleClass}>User Preferences</Link></li>
            <li><Link to="#" onClick={this.onSignOut}>Sign out</Link></li>
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
