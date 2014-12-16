if (Accounts._resetPasswordToken) {
  Session.set('resetPasswordToken', Accounts._resetPasswordToken);
}

Template.recovery.helpers({
  resetPassword: function() {
    return Session.get('resetPasswordToken');
  }
});

Template.recovery.events({
  'submit #forgot-password': function(event, template) {
    event.preventDefault();

    var userEmail = template.find('#user-email').value;

    // You will probably want more robust validation than this!
    if (userEmail) {

      var options = {email: userEmail};
      // This will send a link to the address which, upon clicking, prompts the
      //user to enter a new password.
      Accounts.forgotPassword(options);
      message = 'Sent a reset password link to ' + userEmail + '.';
      Session.set('currentState', EMAIL_SENT_STATE);
    }
    return false;
  },
  'submit #set-new-password': function (event, template) {
    // Proper decoupled validation would be much nicer than this
    var password = template.find('#new-password').value,
      passwordTest = new RegExp("(?=.{6,}).*", "g");

    // If the password is valid, we can reset it.
    if (passwordTest.test(password)) {
      Accounts.resetPassword(
        Session.get('resetPasswordToken'),
        password,
        function (error) {
          if (error) {
            template.find('#form-messages').html('There was a problem resetting your password.');
          } else {
            // Get rid of the token so the forms render properly when they come back.
            Session.set('resetPasswordToken', null);
          }
        });
    } else {
      // Looks like they blew it
      Mediator.publish('show-danger','Your password is too weak!');
    }

    return false;
  }
});