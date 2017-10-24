$('.js-nav-trigger, .adam-haney-logo').click(function() {
  $('.nav, .js-nav-trigger').toggleClass('is-triggered');
});

function closeNav() {
  $('.nav')
    .fadeOut(500)
    .parent('.nav')
      .removeClass('is-triggered');
  $('.js-light-box-arrows').removeClass('is-visible');
  $('html, body').removeAttr('style')
    .unbind('touchmove, pinchZoom');
  return false;
}
$('.nav').swipe({ // user swipes on slide
  swipeUp:function() {
    closeNav();
  },
  threshold:68 // min swipe length of 68px
});
