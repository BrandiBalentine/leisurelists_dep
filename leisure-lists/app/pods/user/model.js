import DS from 'ember-data';

export default DS.Model.extend({
  ratings: DS.hasMany('rating'),
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  email: DS.attr("string"),
  sessionId: DS.attr("string"),
  signedIn: function(){
    return this.get('sessionId') ? true : false;
  }.property("sessionId")
});
