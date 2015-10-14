Meteor.publish('pins', function(username) {
  check(username, Match.Optional(String));

  var query = {};
  if (username) {
    query.authorName = username;
  }

  return Pins.find(query, {
    sort: {
      createdAt: -1
    }
  });

  // call this.ready() incase nothing was returned (i.e. user wasn't logged in)
  this.ready();
});
