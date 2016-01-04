import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signOut: function() {
      var session_id = this.get("cookie").getCookie("session_id");
      Ember.$.ajax({
        type: "DELETE",
        url: "http://localhost:3000/api/logout",
        data: {session_id: session_id}
      })
      .done(function(){
        this.get("cookie").removeCookie("session_id");
        this.get('currentUser').set('sessionId', null);
        this.transitionToRoute('sign-in');
      }.bind(this)
      );
    }
  }
});
