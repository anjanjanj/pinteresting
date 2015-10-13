Template.addPinModal.events({
  'submit #addPinForm': function(e) {
    e.preventDefault();

    //@TODO: does the form reset?

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
