import Ember from 'ember';

export default Ember.TextField.extend({
    type: 'file',
    game: null,
    change: function(event){
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function(completedEvent){
        this.set("game.image", completedEvent.target.result);
      }.bind(this);
      reader.readAsDataURL(file);
    }
});
