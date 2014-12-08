Template.login.events({
  'click #loginAccount': function(event, template) {
    // 1. Collect the username and password from the form
    var username = template.find('#login-username').value;
    var password = template.find('#login-password').value;

    // 2. Attempt to login.
    Meteor.loginWithPassword(username, password, function(error) {
      // 3. Handle the response
      if (Meteor.user()) {
        // Redirect the user to where they're loggin into. Here, Router.go uses
        // the iron:router package.
        Router.go('/success');
      } else {
        // If no user resulted from the attempt, an error variable will be available
        // in this callback. We can output the error to the user here.
        var message = "There was an error logging in: <strong>" + error.reason + "</strong>";

        template.find('#form-messages').innerHTML = message;
      }

      return;
    });
  },
  'click #logout':function () {
     Meteor.logout(function() {
      // Redirect to login
      Router.go('/');
    });
  }
});

Template.login.helpers({
  'user': function () {
    return Meteor.userId();
  }
});