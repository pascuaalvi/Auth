Mediator = {
  channels: {},
  channelDepend: new Tracker.Dependency,
  publish: function(name) {
    this.channels[name] = _.toArray(arguments);
    //console.log(this.channels[name]);
    this.channelDepend.changed();
  },
  subscribe: function(name) {
    this.channelDepend.depend();
    return this.channels[name];
  }
};