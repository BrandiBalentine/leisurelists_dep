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
      .done(function(data){
        this.store.pushPayload("user", data);
        this.get('cookie').setCookie("session_id", data.user.user_sessions[data.user.user_sessions.length - 1].session_id);
      }.bind(this));
    }
  }
});