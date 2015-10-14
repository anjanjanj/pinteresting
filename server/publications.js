Meteor.publish('pins', function(username) {
  check(username, Match.Optional(String));

  //@TODO: is there a shorter way to do this? e.g. username || $anything
  if (username) {
    return Pins.find({
      authorName: username
    }, {
      sort: {
        createdAt: -1
      }
    });
  } else {
    return Pins.find({}, {
      sort: {
        createdAt: -1
      }
    });
  }

  // call this.ready() incase nothing was returned (i.e. user wasn't logged in)
  this.ready();
});
