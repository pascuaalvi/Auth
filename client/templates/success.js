Template.success.helpers({
  topSecret: function () {
    Meteor.subscribe('secret')
    return Secret.find().fetch();
  }
});