Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});


Template.layout.events({
  'click #add': function(e) {
    e.preventDefault();
    Modal.show('addPinModal');
  }
});
