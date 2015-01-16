profileHandle = Meteor.subscribe('profiles');

// All default profile attributes
initialAttributes = {
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
  },
  passwordConfirm:{
    type: String,
    label: "Confirm Password",
    min: 8,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    },
    autoform: {
      afFieldInput: {
        id: 'password',
        type: 'password'
      }
    }
  },
  email: {
    type: String,
    label: "Email",
    max: 50,
    unique: true,
    autoform: {
      afFieldInput: {
        id: 'email'
      }
    }
  }
};

// Schema for form
userSchema = new SimpleSchema (initialAttributes);

// This tracker uses a JSON object that represents the profile attributes to be added on
Tracker.autorun(function () {
  if (profileHandle.ready()){
    initialAttributes = _.extend(initialAttributes,translate());
    userSchema = new SimpleSchema(initialAttributes);
  }
});


SimpleSchema.messages({
  "passwordMismatch": "Passwords do not match."
});

Template.createAccount.helpers({
  userSchema: function () {
    schema = userSchema;
    return schema;
  }
});