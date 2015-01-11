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
  },
  currentView: function () {
    if (checkPermissionGlobal(Meteor.userId(),['upload'])){
      Session.set('manager', false);
      return 'insertForm';
    }
    else if (checkPermissionGlobal(Meteor.userId(),['manage-users'])){
       Session.set('manager', true);
      return 'manageView';
    }
  },
  manager: function(){
    return Session.get('manager');
  }
});