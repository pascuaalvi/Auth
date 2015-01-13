Template.manageView.helpers({
  currentData: function () {
  	return Files.find({});
  },
  filesExist: function () {
    return Files.find({}).count() !== 0;
  },
  author: function (id) {
    Meteor.subscribe('author',id);
    if(Meteor.users.find(id).fetch()[0]){
      return Meteor.users.find(id).fetch()[0].username;
    }
  }
});

Template.manageView.rendered = function () {
	Meteor.subscribe('manage-files',Meteor.userId());
}