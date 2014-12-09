Template.notifyMessages.helpers({
  notifications: function() {
    return Notify.collection.find({},{limit: 1});
  }
});

Template.notifyMessage.rendered = function() {
  Meteor.setTimeout(function(){
    $(".alert").fadeOut("slow");
  },5000);
};
