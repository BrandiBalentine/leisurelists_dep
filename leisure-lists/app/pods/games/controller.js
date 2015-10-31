import Ember from 'ember';

export default Ember.Controller.extend({
  games: Ember.computed.alias('model'),
  header: function() {
    return "The Games Page " + "(" + this.get("gamesCount") + ")";
  }.property("gamesCount"),
  gamesCount: function() {
    return this.get("games.length");
  }.property("games.length"),
  titleSorting: ['title'],
  sortedGames: Ember.computed.sort('games', 'titleSorting'),
});
