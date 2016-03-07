import ActiveModelAdapter from 'active-model-adapter';
import Ember from "ember";


export default ActiveModelAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api',
    headers: Ember.computed(function() {
      return {
        "Authorization": "Token " + Ember.get(document.cookie.match(/session_id\=([^;]*)/), "1"),
      };
    }).volatile(),

    // Reload behavior (Added with ember-cli 1.13.15)
    shouldReloadRecord: function() { return true; },
    shouldReloadAll: function() { return true; },
    shouldBackgroundReloadRecord: function() { return true; },
    shouldBackgroundReloadAll: function() { return true; }
});
