Meteor.startup( function () {
	Meteor.subscribe('users');
	Session.set('currentState', HOME_STATE)
});