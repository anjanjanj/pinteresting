Template.pin.helpers({
  timeAgo: function(date) {
    return moment(date).fromNow();
  },
  canDelete: function(authorName) {
    return Meteor.userId() && authorName === Meteor.user().username;
  }
});

Template.pin.events({
  'click #deletePin': function(e, tpl) {
    e.preventDefault();
    Modal.show('deletePinModal', {pinId: tpl.data._id});
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
