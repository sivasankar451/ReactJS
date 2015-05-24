var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  //Dispatches START_WATCH action 
  startWatch: function(buttonValue) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.START_WATCH
    });
  },
  //Dispatches STOP_WATCH action
  stopWatch: function(buttonValue) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.STOP_WATCH
    });
  },
  //Dispatches RESET_WATCH action
  resetWatch: function(buttonValue) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.RESET_WATCH
    });
  },
  //Dispatches LAP action
  lapWatch: function(buttonValue) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.LAP
    });
  }

};
