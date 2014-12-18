Template.changeEmail.helpers({
  currentEmail: function () {
    return Meteor.user().emails;
  }
});

Template.changeEmail.events({
  'submit #change-email': function(event, template) {
    event.preventDefault();

    var newEmail = template.find('#new-email').value;
    var newEmailRepeated = template.find('#new-email-repeated').value;

    // You will want to validate your passwords better than this
    if (newEmail !== newEmailRepeated) {
      Mediator.publish('show_danger',"Emails don't match.");
      return false;
    }

    Meteor.call('changeEmail',newEmail, function (error) {
      if (error) {
        Mediator.publish('show_danger',error.reason);
      } else {
        Mediator.publish('show_info','Email address has been added!');
        Session.set('email',false);
      }
    });
    return false;
  },
  'click a.glyphicon-remove':  function (event, template) {
    var emailRemove = event.target.attributes[1].value
    console.log(emailRemove);

    var prompt = confirm('Remove '+emailRemove+" from your list of Email Addresses?");
    if(prompt){
      Meteor.call('removeEmail',emailRemove, function (error) {
        if (error) {
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
  'click #emailCancel':  function (event, template) {
    Session.set('email',false);
  }
});