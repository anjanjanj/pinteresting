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
    var d = { pins: Pins.find() };

    if (this.params.username) {
      d.username = this.params.username;
    }

    return d;
  }
});
