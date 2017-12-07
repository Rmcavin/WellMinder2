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
      this.setState({ sleep: !this.state.sleep }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'diet'){
      this.setState({ diet: !this.state.diet }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'activity'){
      this.setState({ activity: !this.state.activity }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'emotional'){
      this.setState({ emotional: !this.state.emotional }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'social'){
      this.setState({ social: !this.state.social }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'occupational'){
      this.setState({ occupational: !this.state.occupational }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'spiritual'){
      this.setState({ spiritual: !this.state.spiritual }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'intellectual'){
      this.setState({ intellectual: !this.state.intellectual }, () => {
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
        <div className="prefList"><label>Sleep</label><input type="checkbox" name="sleep" defaultChecked={this.state.sleep} onClick={this.onChange} /></div>
        <div className="prefList"><label>Diet</label><input type="checkbox" name="diet" defaultChecked={this.state.diet} onClick={this.onChange} /></div>
        <div className="prefList"><label>Activity</label><input type="checkbox" name="activity" defaultChecked={this.state.activity} onClick={this.onChange} /></div>
        <div className="prefList"><label>Emotional</label><input type="checkbox" name="emotional" defaultChecked={this.state.emotional} onClick={this.onChange} /></div>
        <div className="prefList"><label>Social</label><input type="checkbox" name="social" defaultChecked={this.state.social} onClick={this.onChange} /></div>
        <div className="prefList"><label>Occupational</label><input type="checkbox" name="occupational" defaultChecked={this.state.occupational} onClick={this.onChange} /></div>
        <div className="prefList"><label>Spiritual</label><input type="checkbox" name="spiritual" defaultChecked={this.state.spiritual} onClick={this.onChange} /></div>
        <div className="prefList"><label>Intellectual</label><input type="checkbox" name="intellectual" defaultChecked={this.state.intellectual} onClick={this.onChange} /></div>
        <Link to="/dashboard"><button className="formSubmit" onClick={() => { this.props.handlePreferences(this.state) }}>Submit</button></Link>
      </form>
    </div>
  )}
}

export default Preferences;
