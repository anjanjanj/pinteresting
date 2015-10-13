Meteor.methods({
  addPin: function(data) {
    check(data, {
      text: String,
      imageUrl: String
    });

    if (!data) {
      throw new Meteor.Error('input-empty', 'Not enough parameters!');
    }
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'Please login first!');
    }

    return Pins.insert({
      text: data.text,
      imageUrl: data.imageUrl,
      authorName: Meteor.user().username
    });
  }
});
