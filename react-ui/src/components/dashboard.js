import React, { Component } from 'react';
import * as d3 from 'd3';
import testData from '../d3/data'
import chartData from '../d3/linegraph.js'

class Dashboard extends React.Component {
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
    <div className = 'dashboard card'>
    <svg id="graph" width="960" height="500"  viewBox="0 0 960 500"
  preserveAspectRatio="xMidYMid meet">></svg>
    </div>
  )}
}

export default Dashboard;
