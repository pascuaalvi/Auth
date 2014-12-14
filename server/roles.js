
if ( Meteor.users.find().count() === 0 ){
  var users = [
      {username:"Normal User",email:"normal@example.com",roles:[]},
      {username:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
      {username:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
      {username:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

  _.each(users, function (user) {
    var id;

    id = Accounts.createUser({
      username: user.username,
      email: user.email,
      password: "defaultuser",
      passwordConfirm: "defaultuser",
      profile: {
        subscribe:true
      }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }

  });
}
