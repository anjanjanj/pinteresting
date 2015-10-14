Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/:username?', {
  name: 'listAllPins',
  waitOn: function() {
    //@TODO: clean this up
    if (this.params.username) {
      return Meteor.subscribe('pins', this.params.username);
    } else {
      return Meteor.subscribe('pins');
    }
  },
  data: function() {
    if (this.params.username) {
      return {
        username: this.params.username,
        pins: Pins.find()
      };
    } else {
      return {
        pins: Pins.find()
      }
    }
  }
});
