import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.computed.alias('model'),

  ratingsStars: function() {
    var rating = this.get("game.rating");
    var stars = [{class: "star-unselected", value: 1},
                 {class: "star-unselected", value: 2},
                 {class: "star-unselected", value: 3},
                 {class: "star-unselected", value: 4},
                 {class: "star-unselected", value: 5}];
    for (var i = 0; i < rating; i++) {
      stars[i].class = "star-selected";
    }
    return stars.reverse();
  }.property("game.rating"),
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

  actions: {
    addRating(rating) {
      return this.get('game').set('rating', rating);
    }
  }
});
