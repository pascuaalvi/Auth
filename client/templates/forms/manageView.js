Template.manageView.helpers({
  currentData: function () {
  	return Files.find({});
  },
  filesExist: function () {
    return Files.find({}).count() !== 0;
  }
});

Template.manageView.rendered = function () {
	Meteor.subscribe('manage-files',Meteor.userId());
}