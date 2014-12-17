Template.success.helpers({
  topSecret: function () {
    if(Secret1.find().count() !== 0){
      console.log('Shinra');
      return Secret1.find().fetch();
    }
    if(Secret2.find().count() !== 0){
      console.log('Cocoon');
      return Secret2.find().fetch();
    }
    if(Meteor.users.find().count() !== 0){
      console.log('Pascual');
      return Meteor.users.find().fetch();
    }
    return;
  }
});

Template.success.rendered = function () {
  Meteor.subscribe('secret');
  Meteor.subscribe('files', Meteor.userId());
}