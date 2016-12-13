import React from 'react';

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
    console.log('SetIntervalMixin componentWillMount');
  },
  setInterval: function() {
    const num = setInterval.apply(null, arguments);
    console.log('num: ' + num);
    this.intervals.push(setInterval.apply(null, arguments));
    console.log('minxin setInterval ' + this.intervals);
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
    console.log('SetIntervalMixin componentWillUnmount');
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentWillMount: function() {
      console.log('TickTock componentWillMount');
  },
  componentWillUnmount: function() {
      console.log('TickTock componentWillUnmount');
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

export default TickTock;