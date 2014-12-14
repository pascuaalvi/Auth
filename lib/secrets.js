Secret = new Mongo.Collection('secret');

Secret.allow({
  insert: function(userId,doc){
    return true;
  }
});

