Secret0 = new Mongo.Collection('secret0');

Secret0.allow({
  insert: function(userId,doc){
    return Roles.userIsInRole(this.userId, ['view-secrets','admin'],'Pascual');
  }
});

Secret1 = new Mongo.Collection('secret1');

Secret1.allow({
  insert: function(userId,doc){
    return Roles.userIsInRole(this.userId, ['view-secrets','admin'],'Shinra');
  }
});

Secret2 = new Mongo.Collection('secret2');

Secret2.allow({
  insert: function(userId,doc){
    return Roles.userIsInRole(this.userId, ['view-secrets','admin'],'Cocoon');
  }
});

