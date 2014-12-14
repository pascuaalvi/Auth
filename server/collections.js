//For testing only, not part of the AUTH package
Meteor.publish("users", function () {
	return Meteor.users.find({});
});

Meteor.publish('secret', function () {
  if (Roles.userIsInRole(this.userId, ['view-secrets','admin']),'Cocoon') {
    console.log('Cocoon Group');
    return Secret2.find({});
  }
  else if (Roles.userIsInRole(this.userId, ['view-secrets','admin']),'Shinra') {
    console.log('Shinra Group');
    return Secret1.find({});
  }
  else {
    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});

if(Secret1.find().count() === 0){
  Secret1.insert({
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
  });
}

if(Secret2.find().count() === 0){
  Secret2.insert({
    text:"Some secretly covert NSA text."
  });
}


