Meteor.methods({
  changeEmail: function(newEmail) {
    Meteor.users.update(Meteor.userId(), {$push: {emails: {address: newEmail}}});
  },
  removeEmail: function(emailRemove){
    if(Meteor.user().emails.length > 1) {
      // Push new unverified email in collection of emails
      Meteor.users.update(Meteor.userId(), {$pull: {emails: {address: emailRemove, verified: false}}});
    }
    else{
      throw new Meteor.Error("email-delete-last","You cannot delete your only Email Address.");
    }
  }
});