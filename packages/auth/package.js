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
  api.addFiles('login.html', 'client');
  api.addFiles('login.js', 'client');
  api.addFiles('createAccount.html', 'client');
  api.addFiles('createAccount.js', 'client');
  api.addFiles('user.js', 'server');
});
