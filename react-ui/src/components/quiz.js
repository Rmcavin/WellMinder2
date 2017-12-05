import React, { Component } from 'react';

class Quiz extends React.Component {
  render() {
    return (
    <div className = "card quiz">
      <h3>Daily Check In</h3>
      <form className = "quizForm">
        {/* SLEEP */}
        <label className="quizLabel">Sleep</label>
        <input className='likert' type="radio" name="sleep" value="1" />Very Poor
        <input className='likert' type="radio" name="sleep" value="2" />Poor
        <input className='likert' type="radio" name="sleep" value="3" />Neutral
        <input className='likert' type="radio" name="sleep" value="4" />Good
        <input className='likert' type="radio" name="sleep" value="5" />Very Good
        <textarea className='notes' name="sleep" placeholder='Notes' />
        { /*DIET */}
        <label className="quizLabel">Diet</label>
        <input className='likert' type="radio" name="diet" value="1" />Very Poor
        <input className='likert' type="radio" name="diet" value="2" />Poor
        <input className='likert' type="radio" name="diet" value="3" />Neutral
        <input className='likert' type="radio" name="diet" value="4" />Good
        <input className='likert' type="radio" name="diet" value="5" />Very Good
        <textarea className='notes' name="diet" placeholder='Notes' />
        {/* ACTIVITY */}
        <label className="quizLabel">Activity</label>
        <input className='likert' type="radio" name="activity" value="1" />Very Poor
        <input className='likert' type="radio" name="activity" value="2" />Poor
        <input className='likert' type="radio" name="activity" value="3" />Neutral
        <input className='likert' type="radio" name="activity" value="4" />Good
        <input className='likert' type="radio" name="activity" value="5" />Very Good
        <textarea className='notes' name="activity" placeholder='Notes' />

        {/* EMOTIONAL */}
        <label className="quizLabel">Emotional</label>
        <input className='likert' type="radio" name="emotional" value="1" />Very Poor
        <input className='likert' type="radio" name="emotional" value="2" />Poor
        <input className='likert' type="radio" name="emotional" value="3" />Neutral
        <input className='likert' type="radio" name="emotional" value="4" />Good
        <input className='likert' type="radio" name="emotional" value="5" />Very Good
        <textarea className='notes' name="emotional" placeholder='Notes' />

        {/* SOCIAL */}
        <label className="quizLabel">Social</label>
        <input className='likert' type="radio" name="social" value="1" />Very Poor
        <input className='likert' type="radio" name="social" value="2" />Poor
        <input className='likert' type="radio" name="social" value="3" />Neutral
        <input className='likert' type="radio" name="social" value="4" />Good
        <input className='likert' type="radio" name="social" value="5" />Very Good
        <textarea className='notes' name="social" placeholder='Notes' />

        {/* OCCUPATIONAL */}
        <label className="quizLabel">Occupational</label>
        <input className='likert' type="radio" name="Occupational" value="1" />Very Poor
        <input className='likert' type="radio" name="Occupational" value="2" />Poor
        <input className='likert' type="radio" name="Occupational" value="3" />Neutral
        <input className='likert' type="radio" name="Occupational" value="4" />Good
        <input className='likert' type="radio" name="Occupational" value="5" />Very Good
        <textarea className='notes' name="occupational" placeholder='Notes' />

        {/* SPIRITUAL */}
        <label className="quizLabel">Spiritual</label>
        <input className='likert' type="radio" name="spiritual" value="1" />Very Poor
        <input className='likert' type="radio" name="spiritual" value="2" />Poor
        <input className='likert' type="radio" name="spiritual" value="3" />Neutral
        <input className='likert' type="radio" name="spiritual" value="4" />Good
        <input className='likert' type="radio" name="spiritual" value="5" />Very Good
        <textarea className='notes' name="spiritual" placeholder='Notes' />

        {/* INTELLECTUAL */}
        <label className="quizLabel">Intellectual</label>
        <input className='likert' type="radio" name="intellectual" value="1" />Very Poor
        <input className='likert' type="radio" name="intellectual" value="2" />Poor
        <input className='likert' type="radio" name="intellectual" value="3" />Neutral
        <input className='likert' type="radio" name="intellectual" value="4" />Good
        <input className='likert' type="radio" name="intellectual" value="5" />Very Good
        <textarea className='notes' name="intellectual" placeholder='Notes' />

        <input type="submit" />
      </form>

    </div>
  )}
}

export default Quiz;
