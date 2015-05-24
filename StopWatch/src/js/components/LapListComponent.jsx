const React = require('react');
const moment = require('moment');
const Table = require('react-bootstrap/lib/Table');

//Lists all laps details
var LapListComponent=React.createClass({
	render:function(){
		let lapList = this.props.laps.map(function(lapObject,index){
				let lapTime=moment().hour(0).minute(0).second(0).millisecond(lapObject.lapTime).format('HH:mm:ss.SSS');	
				let totalTime=moment().hour(0).minute(0).second(0).millisecond(lapObject.totalTime).format('HH:mm:ss.SSS');	
				return (
					<tr>
						<td>{index+1}</td>
						<td>{lapTime}</td>
						<td>{totalTime}</td>
					</tr>
				);
			}.bind(this));

		return (
			<div>
				<Table responsive className="table-margin-top">
					<thead>
        				<tr>
	          				<th className="table-text-align">Sl.No</th>
	          				<th className="table-text-align">Lap Time</th>
           					<th className="table-text-align">Total Time</th>
        				</tr>
   					</thead>
   					<tbody>
						{lapList}
					</tbody>
				</Table>
			</div>
		);
	}
});

module.exports = LapListComponent;