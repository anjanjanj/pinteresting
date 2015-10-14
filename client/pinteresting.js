Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});


Template.layout.events({
  'click #add': function(e) {
    e.preventDefault();
    Modal.show('addPinModal');
  }
});

Template.layout.helpers({
  // nasty hack for quick navbar highlighting
  activeIfTemplateIs: function(template) {
    if (template === 'home') {
      return Router.current().params.username ? '' : 'active';
    }
    else if (template === 'my') {
      if (!Router.current().params.username || !Meteor.userId()) {
        return '';
      }
      return Router.current().params.username === Meteor.user().username ? 'active' : '';
    }
  }
});
