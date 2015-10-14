// @TODO: find a cleaner way to do all this, far too messy

Template.listAllPins.rendered = function() {
  var options = {
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  };

  // first initialization
  var $grid = $('.grid').masonry(options);

  var updateMasonry = function() {
    $grid.masonry('reloadItems')
    $grid.masonry();
  }

  // accountsUIBootstrap3.logoutCallback = setTimeout(function() {
  //   updateMasonry();
  // }, 500);

  Accounts.onLogin(function() {
    setTimeout(function() {
      updateMasonry();
    }, 500);
  });


  this.autorun(_.bind(function() {
    // "listen" on pins collection changing
    this.data.pins.forEach(function(pin) {});

    Tracker.afterFlush(_.bind(function() {

      $('img').bind('error', function(e) {
        e.target.src = "images/404.jpg"
        updateMasonry();
      });

      $('img').on('load', function() {
        updateMasonry();
      });

      updateMasonry();

    }, this));
  }, this));
};
