Template.changeEmail.helpers({
  currentEmail: function () {
    return Meteor.user().emails;
  },
  add: function () {
    return Session.get('emailAdd');
  }
});

Template.changeEmail.events({
  'submit #add-email': function(event, template) {
    event.preventDefault();

    var newEmail = template.find('#new-email').value;
    var newEmailRepeated = template.find('#new-email-repeated').value;

    // You will want to validate your passwords better than this
    if (newEmail !== newEmailRepeated) {
      Mediator.publish('show_danger',"Emails don't match.");
      return false;
    }

    Meteor.call('checkEmail',newEmail, function (error){
      if(error) {
        Mediator.publish('show_danger',"Email address already in use");
        return;
      }
      else {
        Meteor.call('addEmail',newEmail, function (error) {
          if (error) {
              console.log(error)
            Mediator.publish('show_danger',error.reason);
          } else {
            Mediator.publish('show_info','Email address has been added!');
            Session.set('email',false);
          }
        });
      }
    });


    return false;
  },
  'click a.glyphicon-remove':  function (event, template) {
    var emailRemove = event.target.attributes[1].value

    var prompt = confirm('Remove '+emailRemove+" from your list of Email Addresses?");
    if(prompt){
      Meteor.call('removeEmail',emailRemove, function (error) {
        if (error) {
          console.log(error)
          Mediator.publish('show_danger',error.reason);
        } else {
          Mediator.publish('show_info','Email address '+emailRemove+" has been removed!");
          Session.set('email',false);
        }
      });
    }
    else {
      return;
    }
  },
  'click a.glyphicon-warning-sign':  function (event, template) {
    var emailVerify = event.target.attributes[1].value

    if(emailVerify === 'sample'){
      return;
    }

    var prompt = confirm('Send a verification Email to '+emailVerify+"?");

    if(prompt){
      Meteor.call('emailVerify',emailVerify, function (error) {
        if (error) {
          Mediator.publish('show_danger',error.reason);
        } else {
          Mediator.publish('show_info','Sent verification email to '+emailVerify+".");
          Session.set('email',false);
        }
      });
    }
    else {
      return;
    }
  },
  'click #emailCancel':  function (event, template) {
    Session.set('email',false);
  },
  'click #addEmails':  function (event, template) {
    Session.set('emailAdd',true);
  },
  'click #addCancel':  function (event, template) {
    Session.set('emailAdd',false);
  }
});

Accounts.onEmailVerificationLink( function (token,done) {
  Accounts.verifyEmail(token, function(error) {
    if(error) {
      Mediator.publish('show_danger',"Error with email verification: "+ error.reason);
    }
    else {
      Mediator.publish('show_info', 'Email has been verified.');
      done();
    }
  })
})