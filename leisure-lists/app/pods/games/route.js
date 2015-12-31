import Ember from 'ember';
import WithAuthenticationMixin from '../../mixins/with-authentication';

export default Ember.Route.extend(WithAuthenticationMixin, {
  model: function() {
    return this.store.findAll("game");
  }
});
