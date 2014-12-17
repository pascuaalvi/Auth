Template.editProfile.helpers({
  enabledEmail: function () {
    return Session.get('email');
  },
  enabledPassword: function () {
    return Session.get('password');
  }
});

Template.editProfile.events({
  'click #email': function () {
    console.log('email');
    Session.set('email',true);
  },
  'click #password': function () {
    console.log('password');
    Session.set('password',true);
  }
});

Template.editProfile.created = function () {
  Session.set('email',false);
  Session.set('password',false);
};