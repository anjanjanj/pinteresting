// @TODO: find a cleaner way to do this, too messy

Template.listAllPins.rendered = function() {
  var options = {
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  };

  // first initialization
  var $grid = $('.grid').masonry(options);

  this.autorun(_.bind(function() {
    // "listen" on pins collection changing
    this.data.pins.forEach(function(pin) {});


    Tracker.afterFlush(_.bind(function() {

      $('img').bind('error', function(e) {
        e.target.src = "images/404.jpg"
        $grid.masonry('reloadItems')
        $grid.masonry();
      });

      $('img').on('load', function() {
        // fire when image loads
        $grid.masonry('reloadItems')
        $grid.masonry();
      });

      $grid.masonry('reloadItems')
      $grid.masonry();

    }, this));
  }, this));
};
