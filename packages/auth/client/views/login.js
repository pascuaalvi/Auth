Template.login.events({
  'click #loginAccount ': function(event, template) {
    // 1. Collect the username and password from the form
    var username = template.find('#login-username').value;
    var password = template.find('#login-password').value;

    // 2. Attempt to login.
    Meteor.loginWithPassword(username, password, function(error) {
      // 3. Handle the response
      if (error) {
        // If no user resulted from the attempt, an error variable will be available
        // in this callback. We can output the error to the user here.
        var message = "There was an error logging in: " + error.reason;
        Mediator.publish('show_danger',message);
        return;
      }
      else {
        Mediator.publish('show_info','Successfully Logged In!');
        return;
      }

    });
  },
  'click #createAccount ': function(event, template) {
      Session.set('currentState', CREATE_ACCOUNT_STATE);
  },
  'click #logout':function () {
    Mediator.publish('show_danger',"Logged Out.");
    Meteor.logout();
  }
});

Template.login.helpers({
  'user': function () {
    if(Meteor.user()) {
      return Meteor.user().username;
    }
  }
});