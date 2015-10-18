import Ember from 'ember';

export default Ember.Controller.extend({
  create: function() {
    return this.get('model').save().then(function() {
      return this.transitionToRoute('games');
    }.bind(this));
  }
});
