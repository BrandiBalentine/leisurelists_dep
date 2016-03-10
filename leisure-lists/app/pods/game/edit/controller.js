import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.computed.alias('model'),
  save() {
    return this.get('game').save().then(() => {
      return this.transitionToRoute('game', this.get('game'));
    });
  },
  delete() {
    this.get('game').destroyRecord().then(() => {
      return this.transitionToRoute('games');
    });
  }
});
