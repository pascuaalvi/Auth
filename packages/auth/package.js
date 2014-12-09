Package.describe({
  name: 'pascuaalvi:auth',
  summary: ' Authentication System by pascuaalvi ',
  version: '1.0.0',
  git: 'https://github.com/pascuaalvi/Auth.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('accounts-base');
  api.use('accounts-password');
  api.use('aldeed:autoform@3.2.0');
  api.use('meteor-platform');
  api.export("userSchema");
  api.addFiles('server/validation/user.js', 'server');
  api.addFiles('client/views/login.html', 'client');
  api.addFiles('client/views/login.js', 'client');
  api.addFiles('client/views/createAccount.html', 'client');
  api.addFiles('client/views/createAccount.js', 'client');
});
