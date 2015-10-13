Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'listAllPins',
  waitOn: function() {
    //@TODO: add subscriptions/publications
    //return Meteor.subscribe('pins');
  },
  data: function() {
    return {
      pins: Pins.find()
    };
  }
});
