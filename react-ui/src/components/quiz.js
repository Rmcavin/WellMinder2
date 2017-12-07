import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date(), sleep: 0, diet: 0, activity: 0, emotional: 0, social: 0, occupational: 0, spiritual: 0, intellectual: 0 }
    this.handleClick = this.handleClick.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }
  formHandler(e) {
    e.preventDefault();
    this.props.quizUpdate(this.state)
  }

  handleClick = (event) => {
    if(event.target.name === 'sleep'){
      this.setState({ sleep: parseInt(event.target.value, 10) }, () => {
        //console.log(this.state)
      });
    }else if(event.target.name === 'diet'){
      this.setState({ diet: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }else if(event.target.name === 'activity'){
      this.setState({ activity: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }else if(event.target.name === 'emotional'){
      this.setState({ emotional: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }else if(event.target.name === 'social'){
      this.setState({ social: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }else if(event.target.name === 'occupational'){
      this.setState({ occupational: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }else if(event.target.name === 'spiritual'){
      this.setState({ spiritual: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }else if(event.target.name === 'intellectual'){
      this.setState({ intellectual: parseInt(event.target.value, 10) }, () => {
        // console.log(this.state)
      });
    }
  }

  render() {
    return (
    <div className = "card quiz">
      <h3 className="cardTitle">Daily Check In</h3>
      <hr className="divider"></hr>
      <form className = "quizForm">
        {/* SLEEP */}
        <label className="quizLabel">Sleep</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="sleep" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="sleep" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="sleep" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="sleep" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="sleep" value="5" />Very Good
        <textarea className='notes' name="sleep" placeholder='Notes' />
        { /*DIET */}
        <label className="quizLabel">Diet</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="diet" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="diet" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="diet" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="diet" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="diet" value="5" />Very Good
        <textarea className='notes' name="diet" placeholder='Notes' />
        {/* ACTIVITY */}
        <label className="quizLabel">Activity</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="activity" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="activity" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="activity" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="activity" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="activity" value="5" />Very Good
        <textarea className='notes' name="activity" placeholder='Notes' />

        {/* EMOTIONAL */}
        <label className="quizLabel">Emotional</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="emotional" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="emotional" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="emotional" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="emotional" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="emotional" value="5" />Very Good
        <textarea className='notes' name="emotional" placeholder='Notes' />

        {/* SOCIAL */}
        <label className="quizLabel">Social</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="social" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="social" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="social" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="social" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="social" value="5" />Very Good
        <textarea className='notes' name="social" placeholder='Notes' />

        {/* OCCUPATIONAL */}
        <label className="quizLabel">Occupational</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="occupational" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="occupational" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="occupational" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="occupational" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="occupational" value="5" />Very Good
        <textarea className='notes' name="occupational" placeholder='Notes' />

        {/* SPIRITUAL */}
        <label className="quizLabel">Spiritual</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="spiritual" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="spiritual" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="spiritual" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="spiritual" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="spiritual" value="5" />Very Good
        <textarea className='notes' name="spiritual" placeholder='Notes' />

        {/* INTELLECTUAL */}
        <label className="quizLabel">Intellectual</label>
        <input onClick={this.handleClick} className='likert' type="radio" name="intellectual" value="1" />Very Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="intellectual" value="2" />Poor
        <input onClick={this.handleClick} className='likert' type="radio" name="intellectual" value="3" />Neutral
        <input onClick={this.handleClick} className='likert' type="radio" name="intellectual" value="4" />Good
        <input onClick={this.handleClick} className='likert' type="radio" name="intellectual" value="5" />Very Good
        <textarea className='notes' name="intellectual" placeholder='Notes' />

        <button className="formSubmit" onClick={this.formHandler}>Submit</button>
      </form>

    </div>
  )}
}

export default Quiz;
