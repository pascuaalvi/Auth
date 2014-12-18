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
  api.use('aldeed:autoform@4.1.0');
  api.use('meteor-platform');
  api.use('underscore');

  api.export("userSchema");
  api.export("states");

  api.addFiles('server/validation/user.js', 'server');
  api.addFiles('lib/userEdit.js');
  api.addFiles('client/helpers/hooks.js','client')
  api.addFiles('client/views/login.html', 'client');
  api.addFiles('client/views/login.js', 'client');
  api.addFiles('client/views/createAccount.html', 'client');
  api.addFiles('client/views/createAccount.js', 'client');
  api.addFiles('client/views/recovery.html','client');
  api.addFiles('client/views/recovery.js','client');
  api.addFiles('client/views/editProfile.html','client');
  api.addFiles('client/views/editProfile.js','client');
  api.addFiles('client/views/changePassword.html','client');
  api.addFiles('client/views/changePassword.js','client');
  api.addFiles('client/views/changeEmail.html','client');
  api.addFiles('client/views/changeEmail.js','client');
  api.addFiles('client/views/changeProfile.html','client');
  api.addFiles('client/views/changeProfile.js','client');
});
