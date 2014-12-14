Template.heraldMessages.helpers({
  notifications: function() {
    return Herald.collection.find({});
  }
});

Template.heraldMessage.rendered = function() {
  Meteor.setTimeout(function(){
    $(".alert").fadeOut("slow");
  },2000);
};
