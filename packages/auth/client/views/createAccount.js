// Schema for form
Template.createAccount.events({
  'click #signup, keypress #create-user': function(event, template) {
    if(event.type === 'keypress'){
      if (event.which !== 13) {
        console.log(event.which);
        return;
      }
    }
    var user;

    // Collect data and validate it.
    var formUsername = template.find('#username').value;
    var formEmail = template.find('#email').value;
    var formPassword = template.find('#password').value;
    var passwordConfirm = template.find('#passwordConfirm').value;
    var formName = template.find('#name').value;
    var formSub = template.find('#subscribe').value;

    // You can go about getting your data from the form any way you choose, but
    // in the end you want something formatted like so:
    user = {
      username: formUsername,
      password: formPassword,
      email: formEmail,
      name: formName,
      subscribe: formSub
    }
    // Post the user to the server for creation
    Accounts.createUser(user, function (error) {
      if (error) {
        Mediator.publish('show_error',error);
      }
      else {
        Router.go('/success');
      }
    });
  }
});

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
    label: "Subscribe to Newsletter"
  }
});

SimpleSchema.messages({
  "passwordMismatch": "Passwords do not match."
});

