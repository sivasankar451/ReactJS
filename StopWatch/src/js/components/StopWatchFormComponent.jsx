const React = require('react');
const ActionCreator = require('../actions/StopWatchActionCreators');
const Button = require('react-bootstrap/lib/Button');

//Holds all the Start/Stop, Lap and Reset buttons
let StopWatchFormComponent = React.createClass({
	_handleStartStop: function(){
		if(this.refs.runtime.getDOMNode().value=="Start")
			ActionCreator.startWatch()
		else
			ActionCreator.stopWatch();
	},
	_handleReset: function(){
		ActionCreator.resetWatch();
	},
	_handleLap: function(){
		ActionCreator.lapWatch();
	},
	render: function(){
		let buttonValue="";
		if(this.props.isRunning)
			buttonValue="Stop";
		else
			buttonValue="Start";
		return (
			<div>
				<form>
  						<Button bsStyle='success' ref="runtime" value={buttonValue} className="button-margin-top" onClick={this._handleStartStop}>{buttonValue}</Button>
  						<Button className="button-margin-top" onClick={this._handleLap}>Lap</Button>
  						<Button bsStyle='danger' className="button-margin-top" onClick={this._handleReset}>Reset</Button>
  				</form>
  			</div>
		)
	}
});

module.exports = StopWatchFormComponent;