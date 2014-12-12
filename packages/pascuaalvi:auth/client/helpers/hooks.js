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
    },

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {

    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {

    }
  }
});