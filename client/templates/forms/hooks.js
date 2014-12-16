/*AutoForm.addHooks(
  ["insertForm"],
  {
    before   : {
      insertFormMethod: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      insertFormMethod: CfsAutoForm.Hooks.afterInsert
    }
  }
);


AutoForm.hooks({
  insertForm: {
    // Called when form does not have a `type` attribute
    onSubmit: function(doc,template) {
      this.event.preventDefault();
      console.log(this.template.find('#fileUp'));

      // Post the user to the server for creation
      Files.insert(this.template.find('#fileUp').files[0], function (error) {
        if (error) {
          Mediator.publish('show_danger',error);
        }
        else {
          Mediator.publish('show_info','Successfully uploaded file.');
        }
      });
    }
  }
});
*/