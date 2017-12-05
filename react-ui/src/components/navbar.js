import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
    <header className="titleBar">
      <h1 className="title">WellMinder</h1>
      <i className="fa fa-bars menu" aria-hidden="true"></i>
        <ul className = "dropdown">
          <li>Dashboard</li>
          <li>Daily Check In</li>
          <li>User Preferences</li>
        </ul>
    </header>
  )}
}

export default NavBar;
