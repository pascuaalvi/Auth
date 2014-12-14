checkLogin = function () {
  if (Meteor.userId()) {
    Session.set('currentState', SUCCESS_STATE);
  }
}