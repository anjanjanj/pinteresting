Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/:username?', {
  name: 'listAllPins',
  waitOn: function() {
    //@TODO: add subscriptions/publications
    //return Meteor.subscribe('pins');
    if (this.params.username) {
      return Meteor.subscribe('pins', this.params.username);
    } else {
      return Meteor.subscribe('pins');
    }
  },
  data: function() {
    //@TODO: is there a shorter way to do this? e.g. this.params.username || $anything
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
