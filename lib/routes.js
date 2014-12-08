// Set a default layout template for all routes.
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('home', {
  path: '/'
});

Router.route('createAccount', {
  path: '/signup'
});

Router.route('success', {
  path: '/success'
});