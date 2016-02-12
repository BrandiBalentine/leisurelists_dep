import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signOut: function() {
      var sessionId = this.get("cookie").getCookie("session_id");
      Ember.$.ajax({
        type: "DELETE",
        url: "http://localhost:3000/api/logout",
        headers: {"Authorization": "Token " + sessionId}
      })
      .always(() => {
        this.get("cookie").removeCookie("session_id");
        this.get('currentUser').set('sessionId', null);
        this.transitionToRoute('sign-in');
      });
    }
  }
});
