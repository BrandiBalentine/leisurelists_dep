import DS from "ember-data";

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'api'
});

export default ApplicationAdapter;
