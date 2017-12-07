import React, { Component } from 'react';

class Preferences extends Component {
  constructor(props) {
    super(props);
    console.log("Pref props", props)
    this.state = { date: new Date(), sleep: true, diet: true, activity: true, emotional: true, social: true, occupational: true, spiritual: true, intellectual: true }
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    if(event.target.name === 'sleep'){
      this.setState({ sleep: !this.state.sleep }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'diet'){
      this.setState({ diet: !this.state.diet }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'activity'){
      this.setState({ activity: !this.state.activity }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'emotional'){
      this.setState({ emotional: !this.state.emotional }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'social'){
      this.setState({ social: !this.state.social }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'occupational'){
      this.setState({ occupational: !this.state.occupational }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'spiritual'){
      this.setState({ spiritual: !this.state.spiritual }, () => {
        console.log(this.state)
      });
    }else if(event.target.name === 'intellectual'){
      this.setState({ intellectual: !this.state.intellectual }, () => {
        console.log(this.state)
      });
    }
  }




  render() {
    return (
    <div>
      <form className = "card preferences">
        <h3 className = "cardTitle">User Preferences</h3>
        <hr className="divider"></hr>
        <h5>Which wellness aspects would you like to track?</h5>
        <div className="prefList"><label>Sleep</label><input type="checkbox" name="sleep" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Diet</label><input type="checkbox" name="diet" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Activity</label><input type="checkbox" name="activity" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Emotional</label><input type="checkbox" name="emotional" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Social</label><input type="checkbox" name="social" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Occupational</label><input type="checkbox" name="occupational" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Spiritual</label><input type="checkbox" name="spiritual" onClick={this.onChange} defaultChecked /></div>
        <div className="prefList"><label>Intellectual</label><input type="checkbox" name="intellectual" onClick={this.onChange} defaultChecked /></div>
        <button className="formSubmit" onClick={() => { this.props.handlePreferences(this.state) }}>Submit</button>
      </form>
    </div>
  )}
}

export default Preferences;
