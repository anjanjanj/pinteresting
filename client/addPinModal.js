Template.addPinModal.events({
  'submit #addPinForm': function(e) {
    e.preventDefault();

    Meteor.call('addPin', {
      text: $('#text').val(),
      imageUrl: $('#url').val()
    }, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('addPinModal');
  }
});
