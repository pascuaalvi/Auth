Template.header.helpers({
  'pageTitle': function () {
    return "AUTH package"
  },
   'admin': function () {
    return checkPermissionGlobal(Meteor.user(),['admin']);
  },
  'user': function () {
    return Meteor.user();
  }
});

Template.header.events({
  'click #createAccount, click #forgotPassword, submit #login': function (event, template) {
    event.preventDefault();
    $('.in,.open').removeClass('in open');
  },
  'click #homeTab':  function (event, template) {

  },
  'click #adminTab': function (event, template) {

  }
});
