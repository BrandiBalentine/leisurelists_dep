import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', {path:'games'}, function() {
    this.route('new');
  });
  this.route('game', { path: '/games/:game_id' }, function() {
    this.route('edit');
  });
  this.route('sign-in');
});

export default Router;
