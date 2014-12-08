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