Template.changePassword.events({
'submit #change-password': function(event, template) {
  var currentPassword,
    newPassword,
    newPasswordRepeated;

  currentPassword = template.find('#current-password').value;
  newPassword = template.find('#new-password').value;
  newPasswordRepeated = template.find('#new-password-repeated').value;

  // You will want to validate your passwords better than this
  if (newPassword !== newPasswordRepeated) {
    Mediator.publish('show_danger',"Passwords don't match.");
    return false;
  }

  Accounts.changePassword(currentPassword, newPassword, function(error) {
    if (error) {
      Mediator.publish('show_danger',error.reason);
    } else {
      Mediator.publish('show_info','You reset your password!');
      Session.set('currentState',SUCCESS_STATE);
    }
  });
  return false;
}
});