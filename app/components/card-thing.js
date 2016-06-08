import Ember from 'ember';

export default Ember.Component.extend({
  wormhole: false,
  actions: {
    menuClicked: function(option){
      console.log("clicked " + option);
    }
  },
  didRender: function() {
    Ember.run.later(this, function(){
      this.$(document).foundation('dropdown', 'reflow');
    }, 250);
  },
  menuOptions: ['asdf','qwer','zxcv']
});
