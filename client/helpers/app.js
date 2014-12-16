checkLogin = function () {
  if (Meteor.userId()) {
    if (Session.get('currentState') === CHANGE_PASSWORD_STATE){
      return;
    }
    else {
      Session.set('currentState', SUCCESS_STATE);
    }
  }
  else if (Session.get('currentState') === CREATE_ACCOUNT_STATE){
    return;
  }
  else if (Session.get('currentState') === RECOVERY_STATE){
    return;
  }
  else if (Session.get('currentState') === EMAIL_SENT_STATE){
    return;
  }
  else{
    Session.set('currentState', HOME_STATE);
  }
}