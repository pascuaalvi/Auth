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
    deny: {
      extensions:['exe','txt','java','ini'],
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
    return Roles.userIsInRole(Meteor.userId(),['upload'], findGroup(Meteor.userId()));
  },
  update: function () {
    return Roles.userIsInRole(Meteor.userId(),['upload'], findGroup(Meteor.userId()));
  },
  remove: function () {
    return Roles.userIsInRole(Meteor.userId(),['upload'], findGroup(Meteor.userId()));
  },
  download: function () {
    return Roles.userIsInRole(Meteor.userId(),['upload'], findGroup(Meteor.userId()));
  },
  fetch: null
});

findGroup = function (userId) {
  var group = Roles.getGroupsForUser(Meteor.userId());
  if (group) {
    return Roles.userIsInRole(Meteor.userId(),['upload'], group );
  }
  else {
    return Roles.userIsInRole(Meteor.userId(),['upload']);
  }
}
