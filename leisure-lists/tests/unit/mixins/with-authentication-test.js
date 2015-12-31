import Ember from 'ember';
import WithAuthenticationMixin from '../../../mixins/with-authentication';
import { module, test } from 'qunit';

module('Unit | Mixin | with authentication');

// Replace this with your real tests.
test('it works', function(assert) {
  var WithAuthenticationObject = Ember.Object.extend(WithAuthenticationMixin);
  var subject = WithAuthenticationObject.create();
  assert.ok(subject);
});
