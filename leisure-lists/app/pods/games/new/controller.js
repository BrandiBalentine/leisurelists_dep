import Ember from 'ember';

export default Ember.Controller.extend({
  create: function() {
    return this.get('model').save();
  }
});
