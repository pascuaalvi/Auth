Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://'+LOGIN+':'+PASSWORD+'@smtp.mailgun.org:587';
});

// For tests only, use your own
LOGIN = 'postmaster%40sandbox2bc19ab53bde40838d76f900b4623bf3.mailgun.org';
PASSWORD = 'f1742c6665326e60ec94d5f10e98537d';