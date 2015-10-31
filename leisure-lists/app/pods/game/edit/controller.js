import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.computed.alias('model'),
  save: function() {
    return this.get('game').save().then(function(){
      return this.transitionToRoute('game', this.get('game'));
    }.bind(this));
  },
  delete: function() {
    this.get('game').destroyRecord().then(function() {
      return this.transitionToRoute('games');
    }.bind(this));
  },
});
