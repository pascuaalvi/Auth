AutoForm.hooks({
  createUserForm: {
    // Called when form does not have a `type` attribute
    onSubmit: function(doc) {
      this.event.preventDefault();
      console.log(doc);

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
      console.log(user)
      // Post the user to the server for creation
      Accounts.createUser(user, function (error) {
        if (error) {
          Mediator.publish('show_danger',error);
        }
        else {
          Mediator.publish('show_info','Successfully signed in.');
        }
      });
    }
  }
});