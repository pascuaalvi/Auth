Mediator = {
  channels: {},
  channelDepend: new Tracker.Dependency,
  publish: function(name) {
    this.channels[name] = _.toArray(arguments);
    this.channelDepend.changed();
  },
  subscribe: function(name) {
    this.channelDepend.depend();
    return this.channels[name];
  },
  reset: function(name) {
    this.channels[name] = null;
    this.channelDepend.changed();
  }
};