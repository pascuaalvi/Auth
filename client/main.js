Meteor.startup( function () {
	Meteor.subscribe('users');
  if (!Session.get('currentState')) {
    Session.set('currentState', HOME_STATE);
  }
});