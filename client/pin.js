Template.pin.helpers({
  timeAgo: function(date) {
    return moment(date).fromNow();
  },
  canDelete: function(authorName) {
    return Meteor.userId() && authorName === Meteor.user().username;
  },
  likeText: function(likes) {
    if (!likes || likes.indexOf(Meteor.userId()) === -1) {
      return "Like";
    }
    else {
      return "Unlike";
    }
  }
});

Template.pin.events({
  'click .deletePin': function(e, tpl) {
    e.preventDefault();
    Modal.show('deletePinModal', {
      pinId: tpl.data._id
    });
  },
  'click .likePin': function (e, tpl) {
    e.preventDefault();
    Meteor.call('toggleLike', tpl.data._id, function(error, result) {
      if (error) {
        alert(error);
      }
    });
  }
});

Template.deletePinModal.events({
  'click #confirm': function(e) {
    e.preventDefault();

    Meteor.call('deletePin', this.pinId, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('addPinModal');
  }
});
