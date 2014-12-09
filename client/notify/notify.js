Notify = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),
  throw: function(message) {
    Notify.collection.insert({
      message: message,
      seen: false})
  }
};


Meteor.startup(function() {
  return Tracker.autorun(function() {
    var args;
    args = Mediator.subscribe('show_error');
    if (args) {
      Notify.throw(args[1]);
      Meteor.setTimeout(function () {
        Notify.collection.remove({message:args[1]});
      }, 5000);
    }
  });
});