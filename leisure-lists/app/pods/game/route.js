import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('game', params.game_id).then((game) => {
      return game.get("ratings").then(() => {
        return game;
      });
    });
  }
});
