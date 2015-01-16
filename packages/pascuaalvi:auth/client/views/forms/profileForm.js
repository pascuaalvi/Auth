// Creating the schema

Template.profileForm.helpers({
  ready: function () {
    return Profiles.find().count() !== 0;
  },
  profileSchema: function () {
    schema = new SimpleSchema(translate());
    return translate();
  }
});