const React = require('react');
const TimerComponent = require('./TimerComponent.jsx');
const LapListComponent = require('./LapListComponent.jsx');
const StopWatchFormComponent = require('./StopWatchFormComponent.jsx');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Label = require('react-bootstrap/lib/Label');

//Parent component that holds TimerComponent, StopWatchFormComponent and LapListComponent
var StopWatchComponent = React.createClass({
	render : function(){
		return (
			<div className="container center">
  				<Grid>
    				<Row className='show-grid'>
	  					<Col xs={12} md={3}></Col>
	  					<Col xs={12} md={6}>
	  						<Jumbotron className="padding">
			  		 			<div>
			  		 				<h1><Label bsStyle="default" className="size label-color">StopWatch</Label></h1>
			  		 			</div>
								<TimerComponent label="Total Time" time={this.props.time} />
								<TimerComponent label="Lap Time" time={this.props.lapTime} />
								<StopWatchFormComponent isRunning={this.props.isRunning} />
								<LapListComponent laps={this.props.laps} />
							</Jumbotron>
	  					</Col>
	  					<Col xs={12} md={3}></Col>
  					</Row>
  				</Grid>
  		 
  			</div>  		
		);
	}
});

module.exports = StopWatchComponent;