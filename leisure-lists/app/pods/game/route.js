import Ember from 'ember';
import WithAuthenticationMixin from '../../mixins/with-authentication';

export default Ember.Route.extend(WithAuthenticationMixin, {
  model: function(params) {
    return this.store.findRecord('game', params.game_id);
  }
});
