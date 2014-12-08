Template.createAccount.events({
  'submit #create-user': function(event, template) {
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
      profile: {
        name: formName,
        subscribe: formSub
      }
    }

    console.log(user);
/*
    // Post the user to the server for creation
    Accounts.createUser(user, function (error) {
      if (error) {
        // :(
        console.log(error);
      }
    });
*/

  }
});

// Schema for form
user = new SimpleSchema ({
  username:{
    type: String,
    label: "Username",
    max: 50
  },
  password:{
    type: String,
    label: "Password",
    max: 50
  },
  passwordConfirm:{
    type: String,
    label: "Confirm Password",
    max: 50
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
})