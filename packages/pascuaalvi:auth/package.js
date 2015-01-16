Package.describe({
  name: 'pascuaalvi:auth',
  summary: ' Authentication System by pascuaalvi ',
  version: '1.0.3',
  git: 'https://github.com/pascuaalvi/Auth.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('accounts-base');
  api.use('accounts-password');
  api.use('aldeed:autoform@4.2.2');
  api.use('meteor-platform');
  api.use('underscore');

  api.export("userSchema");
  api.export("profileSchema");
  api.export("states");
  api.export("Profiles");
  api.export("profileHandle");
  api.export("translate");
  api.export("typeTest");


  api.addFiles('lib/userEdit.js');
  api.addFiles('lib/adminForm.js');
  api.addFiles('server/validation/user.js', 'server');
  api.addFiles('server/emailTemplates.js','server');
  api.addFiles('server/publications.js','server');
  api.addFiles('client/helpers/hooks.js','client')
  api.addFiles('client/views/login.html', 'client');
  api.addFiles('client/views/login.js', 'client');
  api.addFiles('client/views/createAccount.html', 'client');
  api.addFiles('client/views/createAccount.js', 'client');
  api.addFiles('client/views/recovery.html','client');
  api.addFiles('client/views/recovery.js','client');
  api.addFiles('client/views/editProfile.html','client');
  api.addFiles('client/views/editProfile.js','client');
  api.addFiles('client/views/changes/changePassword.html','client');
  api.addFiles('client/views/changes/changePassword.js','client');
  api.addFiles('client/views/changes/changeEmail.html','client');
  api.addFiles('client/views/changes/changeEmail.js','client');
  api.addFiles('client/views/changes/changeProfile.html','client');
  api.addFiles('client/views/changes/changeProfile.js','client');
  api.addFiles('client/views/changes/emailSent.html','client');
  api.addFiles('client/views/changes/emailSent.js','client');
  api.addFiles('client/views/forms/adminView.html','client');
  api.addFiles('client/views/forms/adminView.js','client');
  api.addFiles('client/views/forms/profileForm.html','client');
  api.addFiles('client/views/forms/profileForm.js','client');
});
