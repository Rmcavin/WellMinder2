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
      console.log('Dashboard component loaded');
    this.setState({data: testData});
    let width = .9 * window.innerWidth;
    let height = .5 * width;
    this.setState({width: width, height: height})
  }

  componentDidUpdate() {
    if (this.state.data !== 'loading...') {
      chartData(this.state.data)
    }
  }

  render() {
    console.log(this.props);
    return (
    <main className = 'dashboard card'>
    <div className = "graphContainer">
    <svg id="graph" width={this.state.width} height={this.state.height}></svg>
    </div>

    <section className="tiers">
    {/*STREAK*/}
    <div>
      <h4>Streak</h4>
      <h6>tier goes here!{/*this.props.user.tiers[streak]*/}</h6>
    </div>
    {/*TOTAL*/}
    <div>
      <h4>Overall</h4>
      <h6>tier goes here!{/*this.props.user.tiers[total]*/}</h6>
    </div>
    {/*SLEEP*/}
    <div className="sleepcolor">
      <h4>Sleep</h4>
      <h6>tier goes here!{/*this.props.user.tiers[sleep]*/}</h6>
    </div>
    {/*DIET*/}
    <div className ="dietcolor">
      <h4>Diet</h4>
      <h6>tier goes here!{/*this.props.user.tiers[diet]*/}</h6>
    </div>
    {/*ACTIVITY*/}
    <div className="activitycolor">
      <h4>Activity</h4>
      <h6>tier goes here!{/*this.props.user.tiers[activity]*/}</h6>
    </div>
    {/*EMOTIONAL*/}
    <div className="emotionalcolor">
      <h4>Emotional</h4>
      <h6>tier goes here!{/*this.props.user.tiers[emotional]*/}</h6>
    </div>
    {/*SOCIAL*/}
    <div className="socialcolor">
      <h4>Social</h4>
      <h6>tier goes here!{/*this.props.user.tiers[social]*/}</h6>
    </div>
    {/*OCCUPATIONAL*/}
    <div className="occupationalcolor">
      <h4>Occupational</h4>
      <h6>tier goes here!{/*this.props.user.tiers[occupational]*/}</h6>
    </div>
    {/*SPIRITUAL*/}
    <div className="spiritualcolor">
      <h4>Spiritual</h4>
      <h6>tier goes here!{/*this.props.user.tiers[spiritual]*/}</h6>
    </div>
    {/*INTELLECTUAL*/}
    <div className="intellectualcolor">
      <h4>Intellectual</h4>
      <h6>tier goes here!{/*this.props.user.tiers[intellectual]*/}</h6>
    </div>
  </section>
    </main>
  )}
}

export default Dashboard;
