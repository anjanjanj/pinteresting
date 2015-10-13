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

Router.route('/user/:username', function() {
  this.render('listAllPins', {
    data: function () {
      pins: Pins.find({authorName: this.params.username})
    }
  });
});
