Template.success.helpers({
  topSecret: function () {

  Meteor.subscribe('secret');
  Meteor.subscribe('files', Meteor.userId());

    if(Secret0.find().count() !== 0){
      console.log('Pascual');
      return Secret0.find().fetch();
    }
    if(Secret1.find().count() !== 0){
      console.log('Shinra');
      return Secret1.find().fetch();
    }
    if(Secret2.find().count() !== 0){
      console.log('Cocoon');
      return Secret2.find().fetch();
    }
    return;
  }
});