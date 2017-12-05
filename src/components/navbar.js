import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
    <header className="titleBar">
      <h1 className="title">WellMinder</h1>
      <i className="fa fa-bars menu" aria-hidden="true"></i>
      <div className = "dropdown">
        <ul className = "dropdownContents">
          <li>Dashboard</li>
          <li>Daily Check In</li>
          <li>User Preferences</li>
        </ul>
      </div>
    </header>
  )}
}

export default NavBar;
