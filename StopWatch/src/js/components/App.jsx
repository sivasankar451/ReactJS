const React = require('react');
const StopWatchStore = require('../stores/StopWatchStore');
const StopWatchComponent = require('./StopWatchComponent.jsx');

//Controller-View
let App = React.createClass({

  getInitialState() {
    return StopWatchStore.getState();    
  },

  //Handles change event of StopWatchStore
  _onClick() {
    this.setState(StopWatchStore.getState());
  },

  componentDidMount() {
    StopWatchStore.addChangeListener(this._onClick);
  },

  componentWillUnmount() {
    StopWatchStore.removeChangeListener(this._onClick);
  },

  render() {
    let state = this.state;
    return (
      <div className="container">
        <StopWatchComponent time={state.totalTime} lapTime={state.lapTime} laps={state.laps} isRunning={state.isRunning}/>
      </div>
    );
  }

});

module.exports = App;
