//For testing only, not part of the AUTH package
/*
Meteor.publish("users", function () {
	return Meteor.users.find({});
});
*/
Meteor.publish('secret', function () {
  if (Roles.userIsInRole(this.userId, ['view-secrets','admin'],'Cocoon')) {
    console.log('Cocoon Group Secret Admin');
    return Secret2.find({});
  }
  else if (Roles.userIsInRole(this.userId, ['view-secrets','admin'],'Shinra')) {
    console.log('Shinra Group Secret Admin');
    return Secret1.find({});
  }
  else if (Roles.userIsInRole(this.userId, ['view-secrets','admin'],'Pascual')) {
    console.log('Pascual Group Secret Admin');
    return Secret0.find({});
  }
  else {
    console.log('Not Authorized');
    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});

Meteor.publish('files', function (id) {
  if (Roles.userIsInRole(this.userId, ['view-secrets'])) {
    Files.find({});
  }
  else {
    return Files.find({authorId: id});
  }
});

if(Secret0.find().count() === 0){
  Secret0.insert({
    text:"Audi fammam, illibus."
  });
}

if(Secret1.find().count() === 0){
  Secret1.insert({
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });
}

if(Secret2.find().count() === 0){
  Secret2.insert({
    text:"Nothing is secret, everything is allowed."
  });
}


