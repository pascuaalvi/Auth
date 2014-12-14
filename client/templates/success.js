Template.success.helpers({
  topSecret: function () {
    Meteor.subscribe('secret');
    if (Roles.userIsInRole(this.userId, ['view-secrets','admin'])) {
        if(Secret1.find().count() !== 0){
        console.log('Shinra');
        return Secret1.find().fetch();
      }
      if(Secret2.find().count() !== 0){

        console.log('Cocoon');
        return Secret2.find().fetch();
      }
    }
    return;
  }
});