export default {
  name: 'application-initializer',
  after: ['cookie'],

  initialize: function(app) {
    app.inject('controller', 'cookie', 'cookie:main');
    app.inject('route', 'cookie', 'cookie:main');
  }
};
