import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false
    };
  }
    toggleClass() {
      this.setState({active: !this.state.active})
    }

  render() {
    return (
    <header className="titleBar">
      <h1 className="title">WellMinder</h1>
      <div className="menu" onClick={this.toggleClass}><i className="fa fa-bars" aria-hidden="true"></i></div>
        <ul className = {this.state.active ? "dropdown active" : "dropdown inactive"}>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/checkin">Daily Check In</a></li>
          <li><a href="/preferences">User Preferences</a></li>
        </ul>
    </header>
  )}
}

export default NavBar;
