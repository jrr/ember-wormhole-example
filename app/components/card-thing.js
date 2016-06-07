import Ember from 'ember';

export default Ember.Component.extend({
  wormhole: false,
  actions: {
    menuClicked(){
      console.log("clicked!");
    }
  },
  didRender: function() {
    console.log("rendered!");
    Ember.run.later(this, function(){
      this.$().foundation('dropdown', 'reflow');
    }, 250);
  }
});
