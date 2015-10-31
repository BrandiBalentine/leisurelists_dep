import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  image: DS.attr('string'),
  rating: DS.attr('number'),
  releaseDate: DS.attr('date'),
  title: DS.attr('string'),
  system: DS.attr('string'),
  updatedAt: DS.attr('date'),

  capitalizeTitle: function() {
    if (this.get("title")) {
      return this.get("title").toUpperCase();
    }
  }.property("title")
});
