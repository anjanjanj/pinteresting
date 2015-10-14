Template.listAllPins.onCreated(function() {
  // @FIXME: get Masonry called after everything has loaded
  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Isotope after each image loads
  // $grid.imagesLoaded().progress( function() {
  //   $grid.masonry();
  // });

});
