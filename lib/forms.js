Docs = new Meteor.Collection("docs");

mySchema = new SimpleSchema({
  desc: {
    type: String,
    label: 'Description',
    optional:true
  },
  fileId: {
    type: String
  }
});
Docs.attachSchema(mySchema);

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")],
  filter: {
    maxsize: 1048576, // Under 1 MB
    allow: {
      extensions:['js','css','less','html'],
    },
    onInvalid: function (message) {
      if (Meteor.isClient) {
        Mediator.publish('show_error',message);
      } else {
        console.log(message);
      }
    }
  }
});

Files.allow({
  insert: function () {
    console.log(Meteor.userId());
    return Roles.userIsInRole(Meteor.userId(),['upload']);
  },
  update: function () {
    return Roles.userIsInRole(Meteor.userId(),['upload']);
  },
  remove: function () {
    return Roles.userIsInRole(Meteor.userId(),['upload']);
  },
  download: function () {
    return Roles.userIsInRole(Meteor.userId(),['upload']);
  },
  fetch: null
});