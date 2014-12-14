AutoForm.hooks({
  createUserForm: {
    // Called when form does not have a `type` attribute
    onSubmit: function(doc) {
      console.log(doc);
      this.event.preventDefault();

      // Post the user to the server for creation
      Accounts.createUser(doc, function (error) {
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