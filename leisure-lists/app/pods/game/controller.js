import Ember from 'ember';

export default Ember.Controller.extend({
  header: function() {
    return "The Games Page " + "(" + this.get("gamesCount") + ")";
  }.property("gamesCount"),

  gamesCount: function() {
    return this.get("model.length");
  }.property("model")
});
