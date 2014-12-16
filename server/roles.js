
if ( Meteor.users.find().count() === 0 ){
  var users = [
      {username:'alvin',email:"alvinpascual21@gmail.com",roles:['view-secrets','manage-users','admin'],group:'Pascual'},
      {username:"normal",email:"normal@example.com",roles:[]},
      {username:"viewsec1",email:"view@example.com",roles:['view-secrets'], group:'Shinra'},
      {username:"manage1",email:"manage@example.com",roles:['manage-users'], group:'Shinra'},
      {username:"admin1",email:"admin@example.com",roles:['admin'], group:'Shinra'},
      {username:"viewsec2",email:"view2@example.com",roles:['view-secrets'], group:'Cocoon'},
      {username:"manage2",email:"manage2@example.com",roles:['manage-users'], group:'Cocoon'},
      {username:"admin2",email:"admin2@example.com",roles:['admin'], group:'Cocoon'}
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
      if (user.group){
        Roles.addUsersToRoles(id, user.roles, user.group);
      }
      else {
        Roles.addUsersToRoles(id, user.roles);
      }
    }

  });
}
