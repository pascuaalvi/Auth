Template.header.helpers({
  'pageTitle': function () {
    return "AUTH package"
  },
  'admin': function () {
    if (checkPermissionGlobal(Meteor.user(),['admin'])){
      Session.set('navigate', ADMIN_STATE);
      return true;
    }
    return false;
  },
  'upload': function () {
    if (checkPermissionGlobal(Meteor.user(),['upload'])){
      Session.set('navigate', UPLOAD_STATE);
      return true;
    }
    return false;
  },
  'manage': function () {
    if (checkPermissionGlobal(Meteor.user(),['manage-users'])){
      Session.set('navigate', MANAGE_STATE);
      return true;
    }
    return false;
  },
  'user': function () {
    return Meteor.user();
  },
  'uploadState': function () {
    return Session.equals('navigate', UPLOAD_STATE) ? 'active' : '';
  },
  'manageState': function () {
    return Session.equals('navigate', MANAGE_STATE) ? 'active' : '';
  },
  'adminState': function () {
    return Session.equals('navigate', ADMIN_STATE) ? 'active' : '';
  }
});

Template.header.events({
  'click #createAccount, click #forgotPassword, submit #login': function (event, template) {
    event.preventDefault();
    $('.in,.open').removeClass('in open');
  },
  'click #uploadTab':  function (event, template) {
    Session.set('navigate', UPLOAD_STATE);
  },
  'click #manageTab':  function (event, template) {
    Session.set('navigate', MANAGE_STATE);
  },
  'click #adminTab': function (event, template) {
    Session.set('navigate', ADMIN_STATE);
  }
});

userStates = [
{
  id: 0,
  name: "UPLOAD_STATE",
  templateName: "insertForm",
},
{
  id: 1,
  name: "MANAGE_STATE",
  templateName: "manageView",
},
{
  id: 2,
  name: "ADMIN_STATE",
  templateName: "adminView",
}
];

// Sort by ID
_.sortBy(userStates,'id');

// Constants for different states
UPLOAD_STATE   = 0;
MANAGE_STATE  = 1;
ADMIN_STATE  = 2;
