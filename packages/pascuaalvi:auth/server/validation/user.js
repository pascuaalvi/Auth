Accounts.validateNewUser(function (user) {
  // Ensure user name is long enough
  if (user.username.length < 5) {
    throw new Meteor.Error(403, 'Your username needs at least 5 characters');
  }

  var passwordTest = new RegExp("(?=.{6,}).*", "g");
  if (passwordTest.test(user.password) == false) {
    throw new Meteor.Error(403, 'Your password is too weak!');
  }

  return true;
});

Meteor.methods({
insertUser: function (user) {
    id = Accounts.createUser(user);
    Roles.addUsersToRoles(id, ['upload']);
  }
});