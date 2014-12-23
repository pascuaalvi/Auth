// Sample Data Only
if ( Meteor.users.find().count() === 0 ){
  var users = [
      {username:'alvin',email:"alvinpascual21@gmail.com",roles:['download','upload','view-secrets','manage-users','admin'],group:'Pascual'},
      {username:"normal",email:"normal@example.com",roles:['upload']},
      {username:"viewsec1",email:"view@example.com",roles:['download','view-secrets'], group:'Shinra'},
      {username:"manage1",email:"manage@example.com",roles:['manage-users'], group:'Shinra'},
      {username:"admin1",email:"admin@example.com",roles:['upload','admin'], group:'Shinra'},
      {username:"viewsec2",email:"view2@example.com",roles:['download','view-secrets'], group:'Cocoon'},
      {username:"manage2",email:"manage2@example.com",roles:['manage-users'], group:'Cocoon'},
      {username:"admin2",email:"admin2@example.com",roles:['upload','admin'], group:'Cocoon'}
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

    // email verification
    Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

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
