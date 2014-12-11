Meteor.methods({
  'createAccountMethod': function(user,doc) { 
    // A mold for the user that has filled in ALL of the fields.
    var validUser = {
        username: String,
        email: String,
        password: String,
        passwordConfirm: String,
        name: String,
        subscribe: Boolean
      };

    // In the case that a property is present in the mold but the user hasn't provided input on that property, we must delete this property
    for ( var property in doc.$unset ) {
      if ( _.has(validUser, property) ) {
        // Deletes the property from Object
        delete validUser[property];
      }
    }
    
    // Collect data and validate it.
    check(user, validUser);

    // Post user to server to be created
    var userID = Accounts.createUser(user);
    console.log("SERVER: "+ userID);
    return userID;
  }
});
