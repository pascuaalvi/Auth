Package.describe({
  name: 'pascuaalvi:herald',
  summary: ' Notification and Error reporting System by pascuaalvi ',
  version: '1.0.0',
  git: 'https://github.com/pascuaalvi/Auth.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('meteor-platform');

  api.export("Herald");

  api.addFiles('herald.js','client');
  api.addFiles('herald_list.html','client');
  api.addFiles('herald_list.js','client');
});

