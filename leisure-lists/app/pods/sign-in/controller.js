import Ember from 'ember';

export default Ember.Controller.extend({
  email: null,
  password: null,
  actions: {
    signIn: function(){
      var email = this.get('email');
      var password = this.get('password');
      Ember.$.ajax({
        type: "POST",
        url: "http://localhost:3000/api/login",
        data: {
          email: email,
          password: password
        }
      })
      .done((data) => {
        var userSessions = data.user.user_sessions;
        var sessionId = userSessions[userSessions.length - 1].session_id;
        this.store.pushPayload("user", data);
        this.get('cookie').setCookie("session_id", sessionId);
        this.store.find('user', data.user.id).then((user) => {
          user.set('sessionId', sessionId);
          this.controllerFor('application').set("currentUser", user);
        });
        this.transitionToRoute('games');
      });
    }
  }
});
