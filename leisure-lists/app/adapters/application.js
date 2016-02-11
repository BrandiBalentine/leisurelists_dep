import DS from "ember-data";
import Ember from "ember";

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api',
    headers: Ember.computed(function() {
      return {
        "Authorization": "Token " + Ember.get(document.cookie.match(/session_id\=([^;]*)/), "1"),
      };
    }).volatile()
});

export default ApplicationAdapter;
