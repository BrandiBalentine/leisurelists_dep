import Ember from 'ember';

export default Ember.Controller.extend({
  save: function() {
    return this.get('model').save();
  }
});
