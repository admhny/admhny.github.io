$('.js-nav-trigger, .adam-haney-logo').click(function() {
  $('.nav, .js-nav-trigger').toggleClass('is-triggered');
  $('html, body')
    .toggleClass('overflow-hidden')
    .on('touchmove', function(e){
    e.preventDefault();
  });
});

function closeNav() {
  $('.nav, .js-nav-trigger').toggleClass('is-triggered');
  $('html, body').removeClass('overflow-hidden')
  .off('touchmove');
}

$('.nav').swipe({ // user swipes on slide
  swipeUp:function() {
    closeNav();
  },
  threshold:68 // min swipe length of 68px
});
