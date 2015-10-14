// @FIXME: Masonry doesn't work with a hard refresh

Template.listAllPins.rendered = function() {
  console.log('pins rendered');
  var options = {
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  };

  // first initialization
  var $grid = $('.grid').masonry(options);

  /*
  Tracker.autorun(function() {
    console.log(this.data.pins);
    console.log(this.data.username);
  });
  */

  this.autorun(_.bind(function() {
    console.log('autorun');
    // this is how we "listen" for databases change : we setup a reactive computation
    // and inside we reference a cursor (query) from the database and register
    // dependencies on it by calling cursor.forEach, so whenever the documents found
    // by the cursor are modified on the server, the computation is rerun with
    // updated content, note that we use the SAME CURSOR that we fed our #each with
    //var pins = findPins();
    // forEach registers dependencies on the cursor content exactly like #each does
    this.data.pins.forEach(function(pin) { });
    // finally we need to reinit the carousel so it take into account our newly added
    // HTML elements as carousel items, but we can only do that AFTER the #each block
    // has finished inserting in the DOM, this is why we have to use Deps.afterFlush
    // the #each block itself setup another computation and Deps.afterFlush makes sure
    // this computation is done before executing our callback
    Tracker.afterFlush(_.bind(function() {
      console.log('afterFlush');
      $grid.masonry('reloadItems')
      $grid.masonry();
    }, this));
  }, this));
};
