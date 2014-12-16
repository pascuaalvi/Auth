Herald = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),
  throw: function(message, type) {
    Herald.collection.insert({
      message: message,
      type: type,
      seen: false});
  }
};

Meteor.startup(function() {
  return Tracker.autorun(function() {
    //Herald.collection.remove({});

    var info = Mediator.subscribe('show_info');
    var danger = Mediator.subscribe('show_danger');

    if (info) {
      Herald.throw(info[1],'info');
      Mediator.reset('show_info');
      return;
    }

    if (danger) {
      Herald.throw(danger[1],'danger');
      Mediator.reset('show_danger');
      return;
    }
  });
});
