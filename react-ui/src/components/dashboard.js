import React, { Component } from 'react';
import * as d3 from 'd3';
import testData from '../d3/data'
import chartData from '../d3/linegraph.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'loading...',
                  width: null,
                  height: null}
  }

  componentDidMount() {
    this.setState({data: testData});
    let width = .9 * window.innerWidth;
    let height = .5 * width;
    this.setState({width: width, height: height})
  }

  componentWillReceiveProps(nextProps) {
    console.log('what is nextProps',nextProps);
    if (nextProps.user.userData) {
      this.setState({data: nextProps.user.userData})
    }
  }

  componentDidUpdate() {
    console.log('DASHBOARD STATE UPDATE', this.state);
    if (this.state.data.quizData) {
      console.log('inputData', [this.state.data.quizData]);
      //chartData(this.state.data.quizData)
    }
  }

  render() {

    return (
    <main className = 'dashboard card'>
    <div className = "graphContainer">
    <svg id="graph" width={this.state.width} height={this.state.height}></svg>
    </div>

    <section className="tiers">
    {/*STREAK*/}
    <div>
      <h4>Streak</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.streak : null}</h6>
    </div>
    {/*TOTAL*/}
    <div>
      <h4>Overall</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.total : null}</h6>
    </div>
    {/*SLEEP*/}
    <div className="sleepcolor">
      <h4>Sleep</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.sleep : null}</h6>
    </div>
    {/*DIET*/}
    <div className ="dietcolor">
      <h4>Diet</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.diet : null}</h6>
    </div>
    {/*ACTIVITY*/}
    <div className="activitycolor">
      <h4>Activity</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.activity : null}</h6>
    </div>
    {/*EMOTIONAL*/}
    <div className="emotionalcolor">
      <h4>Emotional</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.emotional : null}</h6>
    </div>
    {/*SOCIAL*/}
    <div className="socialcolor">
      <h4>Social</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.social : null}</h6>
    </div>
    {/*OCCUPATIONAL*/}
    <div className="occupationalcolor">
      <h4>Occupational</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.occupational : null}</h6>
    </div>
    {/*SPIRITUAL*/}
    <div className="spiritualcolor">
      <h4>Spiritual</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.spiritual : null}</h6>
    </div>
    {/*INTELLECTUAL*/}
    <div className="intellectualcolor">
      <h4>Intellectual</h4>
      <h6>{ this.state.data.tiers ? this.state.data.tiers.intellectual : null}</h6>
    </div>
  </section>
    </main>
  )}
}

export default Dashboard;
