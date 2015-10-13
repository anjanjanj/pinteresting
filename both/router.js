Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/:username?', {
  name: 'listAllPins',
  waitOn: function() {
    //@TODO: add subscriptions/publications
    //return Meteor.subscribe('pins');
  },
  data: function() {
    //@TODO: is there a shorter way to do this? e.g. this.params.username || $anything
    if (this.params.username) {
      return {
        pins: Pins.find({
          authorName: this.params.username
        }),
        username: this.params.username
      };
    } else {
      return {
        pins: Pins.find({})
      };
    }
  }
});
