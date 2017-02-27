// Return whether the given element is in the viewport.
function elementInView(e) {
  var $e = $(e);

  // Get scroll position of the page.
  var scrollE = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewTop = $(scrollE).scrollTop();
  var viewBottom = viewTop + $(window).height();

  // Get element position on the page.
  var eTop = Math.round( $e.offset().top );
  var eBottom = eTop + $e.height();

  return ((eTop < viewBottom) && (eBottom > viewTop));
}

// Trigger the given animation on the element if it is ready.
function animate(element, animation, ready) {
  var $e = $(element);

  if ($e.hasClass(animation)) return;
  if (ready($e)) {
    $e.addClass(animation);
  }
}

// Capture scroll events
$(window).scroll(function(){
  animate('.contact', 'fadeIn', elementInView);
});
