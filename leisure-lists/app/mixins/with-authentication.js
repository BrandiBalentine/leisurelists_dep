import Ember from 'ember';

export default Ember.Mixin.create({
  redirectToLogin: function(){
    this.transitionTo('sign-in');
  },
  beforeModel: function(){
    var sessionId = this.get('cookie').getCookie('session_id');
    if (sessionId) {
      this.store.find('user', sessionId).then(function(user){
        this.set('currentUser', user);
      }.bind(this),
      function(){
        this.redirectToLogin();
      }.bind(this));
    }
    else {
      this.redirectToLogin();
    }
  }
});
