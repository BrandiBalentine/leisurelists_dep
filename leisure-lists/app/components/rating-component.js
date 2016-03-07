import Ember from 'ember';

export default Ember.Component.extend({
  item: null,

  ratingsStars: function() {
    var rating = this.get("item.rating");
    var stars = [{class: "star-unselected", value: 1},
                 {class: "star-unselected", value: 2},
                 {class: "star-unselected", value: 3},
                 {class: "star-unselected", value: 4},
                 {class: "star-unselected", value: 5}];
    for (var i = 0; i < rating; i++) {
      stars[i].class = "star-selected";
    }
    return stars.reverse();
  }.property("item.rating"),

  actions: {
    addRating(rating) {
      return this.get('item').set('rating', rating);
    }
  }
});
