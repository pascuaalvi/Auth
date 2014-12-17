 Template.insertForm.events({
  'submit #insertForm': function (event, template) {
    event.preventDefault();

    // Code from here crashes when input control 'fileUp' is of type="cfs-file"
    /*
    var file = template.find('#fileUp').files[0];
    */
    // This is because 'fileUp' in this case does not have the 'files' property containing the FileList.

    // This code is comnpatible with input controls of type "cfs-file",
    // but may not be preferred due to inferior legibility.
    //    Event.target has an array of the target template's input fields, our input field
    //    just so happened to be the attribute at index 1.

    var file = event.target[0].files[0];
    var fileDesc = event.target[2].value

    if (file) {
      file = new FS.File(file);

      file = _.extend(file, {
        desc: fileDesc,
        authorId: Meteor.userId()
      })

      Files.insert(file, function (error, file) {
        if (!error) {
          Mediator.publish('show_info','Successfully uploaded: '+file.original.name);
        }
        else{
          Mediator.publish('show_danger','Error: '+error.reason)
        }
      });
    }
    else {
      Mediator.publish('show_danger','No file selected.')
    }

  }
});