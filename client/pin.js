Template.pin.helpers({
  timeAgo: function(date) {
    return moment(date).fromNow();
  }
});

// @TODO: add canDelete helper and delete link
