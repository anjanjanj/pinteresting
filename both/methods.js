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
      authorName: Meteor.user().username,
      likes: []
    });
  },

  deletePin: function(pinId) {
    check(pinId, String);
    pin = Pins.findOne({ _id: pinId });
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'Please login first!');
    }
    if (!pin) {
      throw new Meteor.Error('invalid-input', 'Specified pin does not exist!');
    }
    if (pin.authorName !== Meteor.user().username) {
      throw new Meteor.Error("not-authorized", 'You can only delete your own pins!');
    }

    Pins.remove(pinId);
  },

  toggleLike: function(pinId) {
    check(pinId, String);
    pin = Pins.findOne({ _id: pinId });
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'Please login first!');
    }
    if (!pin) {
      throw new Meteor.Error('invalid-input', 'Specified pin does not exist!');
    }

    if (!pin.likes) {
      pin.likes = [];
    }

    if (pin.likes.indexOf(Meteor.userId()) === -1) {
      // they don't already like this, add their like
      pin.likes.push(Meteor.userId());
    }
    else {
      // they do already like this, remove their like
      var likeIndex = pin.likes.indexOf(Meteor.userId());
      pin.likes.splice(likeIndex, 1);
    }

    Pins.update(pinId, {
      $set: {likes: pin.likes}
    });
  }
});
