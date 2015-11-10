export default {
  name: 'application-initializer',
  after: ['cookie'],

  initialize: function(container, app) {
    app.inject('controller', 'cookie', 'cookie:main');
  }
};
