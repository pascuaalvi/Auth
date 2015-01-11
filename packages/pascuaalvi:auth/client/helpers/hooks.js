AutoForm.hooks({
  createUserForm: {
    // Called when form does not have a `type` attribute
    onSubmit: function(doc) {
      this.event.preventDefault();

      var user = {
        username: doc.username,
        email: doc.email,
        password: doc.password,
        passwordConfirm: doc.passwordConfirm
      }

      var profile = {};

      if(doc.name){
        _.extend (profile, {
          name: doc.name
        });
      }
      if(doc.subscribe){
        _.extend (profile, {
          subscribe: doc.subscribe
        });
      }

      user.profile = profile;

      Meteor.call('insertUser',user,function (error,result){
        if (error) {
          Mediator.publish('show_danger',error);
          document.getElementById("submitAccount").disabled = false;
        }
        else {
          Mediator.publish('show_info','Successfully created account.');
          Meteor.loginWithPassword(user.username, user.password);
        }
      });
    }
  }
});