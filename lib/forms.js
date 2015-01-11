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
    return checkPermissionGlobal(Meteor.userId(),['upload']);
  },
  update: function () {
    return checkPermissionGlobal(Meteor.userId(),['upload']);
  },
  remove: function () {
    return checkPermissionGlobal(Meteor.userId(),['upload']);
  },
  download: function () {
    return checkPermissionGlobal(Meteor.userId(),['download']);
  },
  fetch: null
});

// All users belong to AT MOST 1 group
checkPermissionGlobal = function (userId,permission) {
  group = Roles.getGroupsForUser(userId);
  if(group.length > 0){
    return Roles.userIsInRole(userId,permission,group[0]);
  }
  else {
    return Roles.userIsInRole(userId,permission)
  }
}
