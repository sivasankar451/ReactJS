const React = require('react');
const moment = require('moment');
const Label = require('react-bootstrap/lib/Label');

//Displays time in HH:mm:ss.SSS form
var TimerComponent=React.createClass({
	render:function(){
		let time=moment().hour(0).minute(0).second(0).millisecond(this.props.time).format('HH:mm:ss.SSS');		

		return (
			<div className="margin">
  				<h4>{this.props.label}:
  				<Label bsStyle="default" className="size margin-left">{time}</Label></h4>
  			</div>
		);
	}
});

module.exports=TimerComponent;