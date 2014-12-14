checkLogin = function () {
  if (Meteor.userId()) {
    Session.set('currentState', SUCCESS_STATE);
  }
  else if (Session.get('currentState') === CREATE_ACCOUNT_STATE){
    return;
  }
  else{
    Session.set('currentState', HOME_STATE);
  }
}