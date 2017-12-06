import React, { Component } from 'react';
import * as d3 from 'd3';
import testData from '../d3/data'
import chartData from '../d3/linegraph.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'loading...'}
  }

  componentDidMount() {
    this.setState({data: testData});
  }

  componentDidUpdate() {
    if (this.state.data !== 'loading...') {
      chartData(this.state.data)
    }
  }

  render() {
    return (
    <main className = 'dashboard card'>
    <svg id="graph" width="960" height="500"  viewBox="0 0 960 500"
  preserveAspectRatio="xMidYMid meet">></svg>

    <section className="tiers">
    <div>Streak</div>
    <div>Overall</div>
    <div>Sleep</div>
    <div>Diet</div>
    <div>Activity</div>
    <div>Emotional</div>
    <div>Social</div>
    <div>Occupational</div>
    <div>Spiritual</div>
    <div>Intellectual</div>
    </section>
    </main>
  )}
}

export default Dashboard;
