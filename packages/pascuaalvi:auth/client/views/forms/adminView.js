profileHandle = Meteor.subscribe('profiles');

Template.adminView.helpers({
  profileReady: function(){
    // the handle has a special "ready" method, which is a reactive
    // data source it indicates if the data provided by the publication
    // has made its way to the client
    return profileHandle.ready();
  }
});


