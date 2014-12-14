//For testing only, not part of the AUTH package
Meteor.publish("users", function () {
	return Meteor.users.find({});
});

Meteor.publish('secret', function () {
  if (Roles.userIsInRole(this.userId, ['view-secrets','admin'])) {
    return Secret.find({});
  } else {
    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});

if(Secret.find().count() === 0){
  Secret.insert({
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
  });
  Secret.insert({
    text:"Some secretly covert NSA text."
  });
}

