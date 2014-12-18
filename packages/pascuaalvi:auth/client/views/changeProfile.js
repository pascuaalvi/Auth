Template.changeProfile.helpers({
  currentName: function () {
    var name = Meteor.user().profile.name;
    if(name) {
      return name;
    }
    else{
      return "Your Name Here"
    }
  },
  subscribed: function () {
    return Meteor.user().profile.subscribe;
  }
});

Template.changeProfile.events({
  'submit #change-profile': function(event, template) {
    event.preventDefault();
    name = template.find('#name').value;
    sub = template.find('#subscribe').checked;

    var profile = {subscribe: sub};

    if(name){
      _.extend (profile, {
        name: name
      });
    }

    Meteor.call('changeProfile',profile, function (error) {
      if (error) {
        Mediator.publish('show_danger',error.reason);
      } else {
        Mediator.publish('show_info','Profile has been updated!');
        Session.set('profile',false);
      }
    });
    return false;

  },
  'click #profileCancel':  function (event, template) {
    Session.set('profile',false);
  }
});