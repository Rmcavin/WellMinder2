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

  componentDidUpdate() {
    if (this.state.data !== 'loading...') {
      chartData(this.state.data)
    }
  }

  render() {

    return (
    <main className = 'dashboard card'>
    <div className = "graphContainer">
    <svg id="graph" width={this.state.width} height={this.state.height}></svg>
    </div>

    <section className="tiers">
    <div>Streak</div>
    <div>Overall</div>
    <div className="sleepcolor">Sleep</div>
    <div className ="dietcolor">Diet</div>
    <div className="activitycolor">Activity</div>
    <div className="emotionalcolor">Emotional</div>
    <div className="socialcolor">Social</div>
    <div className="occupationalcolor">Occupational</div>
    <div className="spiritualcolor">Spiritual</div>
    <div className="intellectualcolor">Intellectual</div>
  </section>
    </main>
  )}
}

export default Dashboard;
