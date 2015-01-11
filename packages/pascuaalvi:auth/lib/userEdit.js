Meteor.methods({
  addEmail: function(newEmail) {
    Meteor.users.update(this.userId(), {$push: {emails: {address: newEmail}}});
  },
  checkEmail: function(email) {
    if (Meteor.users.findOne({ emails: {$elemMatch: {address: email}}})) {
      throw new Meteor.Error('email-exists-already','Email is already in use.')
    }
  },
  removeEmail: function(emailRemove){
    if(Meteor.user().emails.length > 1) {
      // Push new unverified email in collection of emails
      Meteor.users.update(this.userId(), {$pull: {emails: {address: emailRemove}}});
    }
    else{
      throw new Meteor.Error("email-delete-last","You cannot delete your only Email Address.");
    }
  },
  changeProfile: function(profile) {
    Meteor.users.update(this.userId(), {$set: {profile: profile}});
  },
  emailVerify: function(emailVerify) {
    Accounts.sendVerificationEmail(this.userId(),emailVerify);
  }
});