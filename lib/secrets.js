Secret1 = new Mongo.Collection('secret1');

Secret1.allow({
  insert: function(userId,doc){
    return true;
  }
});

Secret2 = new Mongo.Collection('secret2');

Secret2.allow({
  insert: function(userId,doc){
    return true;
  }
});

