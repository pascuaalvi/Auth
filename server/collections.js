//For testing only, not part of the AUTH package
Meteor.publish("users", function () {
	return Meteor.users.find({});
});