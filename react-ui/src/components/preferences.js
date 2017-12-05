import React, { Component } from 'react';

class Preferences extends React.Component {
  render() {
    return (
    <div>
      <form className = "preferences">
        <div className="prefList"><label>Sleep</label><input type="checkbox" name="sleep" checked /></div>
        <div className="prefList"><label>Diet</label><input type="checkbox" name="diet" checked /></div>
        <div className="prefList"><label>Activity</label><input type="checkbox" name="activity" checked /></div>
        <div className="prefList"><label>Emotional</label><input type="checkbox" name="emotional" checked /></div>
        <div className="prefList"><label>Social</label><input type="checkbox" name="social" checked /></div>
        <div className="prefList"><label>Occupational</label><input type="checkbox" name="occupational" checked /></div>
        <div className="prefList"><label>Spiritual</label><input type="checkbox" name="spiritual" checked /></div>
        <div className="prefList"><label>Intellectual</label><input type="checkbox" name="intellectual" checked /></div>
      </form>
    </div>
  )}
}

export default Preferences;
