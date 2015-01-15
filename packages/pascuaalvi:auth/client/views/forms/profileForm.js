// Creating the schema
profileSchema = new SimpleSchema({});

Tracker.autorun( function () {
    profileSchema = new SimpleSchema({
      username:{
        type: String,
        label: "Username",
        max: 50,
        min: 3,
        autoform: {
          afFieldInput: {
            id: 'username'
          }
        }
      },
      password:{
        type: String,
        label: "Password",
        min: 8,
        autoform: {
          afFieldInput: {
            id: 'password',
            type: 'password'
          }
        }
      }
    });
});

// Testing the sample data to decipher its type.
// If it is not recognized, then it is not supported
specialTest = function (sample) {
  if (sample.constructor === Array) {
    return Array;
  }
  else if(sample instanceof Date){
    return Date;
  }
}