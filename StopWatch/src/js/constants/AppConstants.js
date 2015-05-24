const keyMirror = require('react/lib/keyMirror');

module.exports = {

  //All the actions in the project
  ActionTypes: keyMirror({
    START_WATCH:null,
    STOP_WATCH:null,
    LAP:null,
    RESET_WATCH:null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
