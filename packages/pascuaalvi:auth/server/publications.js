Meteor.publish('profiles', function () {
  return Profiles.find({});
});

// This is what my web application will use as starting fields for the profile
// I will store the name of the schema field (alias) in the object itself, and parse it
// separately in profileForm.
var sampleString = 'String';
var sampleBoolean = true;
var sampleDate = new Date('1993/08/21');

if (Profiles.find().count() === 0) {
  Profiles.insert({
    alias: 'name',
    sample: sampleString,
    label: "Name",
    max: 50,
    optional: true
  });

  Profiles.insert({
    alias: 'birthday',
    sample: sampleDate,
    label: "Date of Birth",
    optional: true,
  });

  Profiles.insert({
    alias: 'subscribe',
    sample: sampleBoolean,
    label: "Subscribe to Newsletter",
    optional: true,
    autoformType: "boolean-checkbox"
  });

}