const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _laps = [],_totalTime=0,_lapTime=0,_isRunning=false, intervalId;

//Starts watch
function startWatch() {
    _lapTime=0;
    intervalId=setInterval(tick,10);
    _isRunning=true;
}

//Stops watch and records lap time
function stopWatch() {    
    clearInterval(intervalId);
    _laps.push({lapTime:_lapTime,totalTime:_totalTime});
    _isRunning=false;
}
function tick(){
  _totalTime+= 10;
  _lapTime+= 10;
  StopWatchStore.emitChange();
}

//Resets watch and recorded laps
function resetWatch() {
    _isRunning=false;
    if(intervalId!=undefined && intervalId!="")
      clearInterval(intervalId);    
    _laps=[];
    _totalTime=0;
    _lapTime=0;

}

//Records lap time
function handleLap() {
    if(_isRunning)
    {  
      _laps.push({lapTime:_lapTime,totalTime:_totalTime});
      _lapTime=0;
    }

}
// Facebook style store creation.
let StopWatchStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getState() {
    return {
      laps: _laps,
      totalTime:_totalTime,
      lapTime:_lapTime,
      isRunning:_isRunning
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.START_WATCH:
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        startWatch();
        StopWatchStore.emitChange();
        break;
      case Constants.ActionTypes.STOP_WATCH:
        stopWatch();
        StopWatchStore.emitChange();
        break;
      case Constants.ActionTypes.RESET_WATCH:
        resetWatch();
        StopWatchStore.emitChange();
        break;
      case Constants.ActionTypes.LAP:
        handleLap();
        StopWatchStore.emitChange();
        break;

    }
  })

});

module.exports = StopWatchStore;
