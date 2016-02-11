import Ember from 'ember';

export default Ember.Mixin.create({
  redirectToLogin: function(){
    this.transitionTo('sign-in');
  },
  beforeModel: function(){
    this._super();
    if (this.get('currentUser')) {
      return;
    }
    var sessionId = this.get('cookie').getCookie('session_id');
    if (sessionId) {
      return Ember.$.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/authenticate',
        data: {session_id: sessionId}
      })
      .done((userSession) => {
        return this.store.find('user', userSession.user_session.user_id).then((user) => {
          this.set('currentUser', user);
          this.get('currentUser').set('sessionId', sessionId);
        },
        () => {
          this.redirectToLogin();
        });
      });
    }
    else {
      this.redirectToLogin();
    }
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('currentUser', this.get('currentUser'));
  }
});
