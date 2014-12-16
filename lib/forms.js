Docs = new Meteor.Collection("docs");

mySchema = new SimpleSchema({
  name: {
    type: String,
    optional:true
  },
  fileId: {
    type: String
  }
});
Docs.attachSchema(mySchema);

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  },
  fetch: null
});