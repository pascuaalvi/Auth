Notify = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),
  throw: function(message, type) {
    Notify.collection.insert({
      message: message,
      type: type,
      seen: false});
  }
};


Meteor.startup(function() {
  return Tracker.autorun(function() {
    var danger = Mediator.subscribe('show_danger');
    if (danger) {
      Notify.throw(danger[1],'danger');
      Meteor.setTimeout(function () {
        Notify.collection.remove({message:danger[1]});
      }, 5000);
    }
    var info = Mediator.subscribe('show_info');
    if (info) {
      Notify.throw(info[1],'info');
      Meteor.setTimeout(function () {
        Notify.collection.remove({message:info[1]});
      }, 5000);
    }
  });
});