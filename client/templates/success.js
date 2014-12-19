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
    var groups = Roles.getGroupsForUser (Meteor.userId());
    if (checkIfInRole(['upload'], groups)){
      return 'insertForm';
    }
  }
});

checkIfInRole = function (roles,groups) {
  if(groups.length > 0){
      return Roles.userIsInRole(Meteor.userId(),roles,groups[0]);
  }
  else {
    return Roles.userIsInRole(Meteor.userId(),roles);
  }
}