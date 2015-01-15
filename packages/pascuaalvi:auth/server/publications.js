Meteor.publish('profiles', function () {
  return Profiles.find({});
});

// This is what my web application will use as starting fields for the profile
// I will store the name of the schema field (alias) in the object itself, and parse it
// separately in profileForm.

if (Profiles.find().count() === 0) {
  Profiles.insert({
    alias: 'name',
    sample: 'String',
    label: "Name",
    max: 50,
    optional: true
  });

  Profiles.insert({
    alias: 'subscribe',
    sample: true,
    label: "Subscribe to Newsletter",
    optional: true,
    autoformType: "boolean-checkbox"
  });
}