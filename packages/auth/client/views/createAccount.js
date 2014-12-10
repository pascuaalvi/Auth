/*Template.createAccount.events({
  'submit #createUserForm': function(){
    var call = Meteor.call('createAccountMethod', doc, function (error, result){
      if(error){
        Mediator.publish('show_danger',error.message);
      }
      else{
        Mediator.publish('show_info','Successfully logged in.');
      }
    });
  }
});*/

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
    Accounts.createUser(user);
    if (Meteor.user()) {
      Mediator.publish('show_info','Successfully Registered!');
    }
    else {
      Mediator.publish('show_danger',"Failed to log in.");
    }
    //console.log("CLIENT: "+Meteor.user());
    console.log(Meteor.users.find().fetch());
  }
});

// Schema for form
userSchema = new SimpleSchema ({
  username:{
    type: String,
    label: "Username",
    max: 50,
    min: 5
  },
  password:{
    type: String,
    label: "Password",
    min: 8
  },
  passwordConfirm:{
    type: String,
    label: "Confirm Password",
    min: 8,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    }
  },
  email: {
    type: String,
    label: "Email",
    max: 50
  },
  name: {
    type: String,
    label: "Name",
    max: 50,
    optional: true
  },
  subscribe: {
    type: Boolean,
    label: "Subscribe to Newsletter",
    optional: true
  }
});

SimpleSchema.messages({
  "passwordMismatch": "Passwords do not match."
});

