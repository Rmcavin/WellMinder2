import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Preferences extends Component {
  constructor(props) {
    super(props);
    console.log("Prefs props:", props);
    this.state = this.props.user.userData.preferences;
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    if(event.target.name === 'sleep'){
      this.setState({ sleep: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'diet'){
      this.setState({ diet: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'activity'){
      this.setState({ activity: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'emotional'){
      this.setState({ emotional: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'social'){
      this.setState({ social: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'occupational'){
      this.setState({ occupational: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'spiritual'){
      this.setState({ spiritual: !event.target.value }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'intellectual'){
      this.setState({ intellectual: !event.target.value }, () => {
        //console.log(this.state)
      });
    }
  }

  render() {
    console.log('prefs state', this.state)
    return (
    <div>
      <form className = "card preferences">
        <h3 className = "cardTitle">User Preferences</h3>
        <hr className="divider"></hr>
        <h5>Which wellness aspects would you like to track?</h5>
        <div className="prefList"><label>Sleep</label><input type="checkbox" name="sleep" checked={this.state.user.userData.preferences.sleep} onClick={this.onChange} /></div>
        <div className="prefList"><label>Diet</label><input type="checkbox" name="diet" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Activity</label><input type="checkbox" name="activity" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Emotional</label><input type="checkbox" name="emotional" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Social</label><input type="checkbox" name="social" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Occupational</label><input type="checkbox" name="occupational" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Spiritual</label><input type="checkbox" name="spiritual" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Intellectual</label><input type="checkbox" name="intellectual" onClick={this.onChange} defaultChecked /></div>
        <Link to="/dashboard"><button className="formSubmit" onClick={() => { this.props.handlePreferences(this.state) }}>Submit</button></Link>
      </form>
    </div>
  )}
}

export default Preferences;
