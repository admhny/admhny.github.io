function prevImg() {
  if ( $('.gallery-item.is-expanded').is(':first-child') ) {
    $('.gallery-item.is-expanded')
      .removeClass('is-expanded')
      .find('.js-light-box')
        .hide()
    $('.gallery-item:last-child')
      .addClass('is-expanded')
      .find('.js-light-box')
        .show();
  } else {
    $('.gallery-item.is-expanded')
      .removeClass('is-expanded')
      .find('.js-light-box')
        .hide()
      .parent()
      .prev()
        .addClass('is-expanded')
        .find('.js-light-box')
          .show();
  }
}

function nextImg() {
  if ( $('.gallery-item.is-expanded').is(':last-child') ) {
    $('.gallery-item.is-expanded')
      .removeClass('is-expanded')
      .find('.js-light-box')
        .hide()
    $('.gallery-item:first-child')
      .addClass('is-expanded')
      .find('.js-light-box')
        .show();
  } else {
    $('.gallery-item.is-expanded')
      .removeClass('is-expanded')
      .find('.js-light-box')
        .hide()
      .parent()
      .next()
        .addClass('is-expanded')
        .find('.js-light-box')
          .show();
  }
}

$('.gallery-item').click(function(){ // When .gallery-item is clicked
  $(this)
    .addClass('is-expanded')
    .children('.js-light-box')
    .fadeIn(1000);
  $('.js-light-box-arrows').addClass('is-visible');
  $(document).keydown(function(e) { // user hits keys after clicking an image
     switch(e.which) {
         case 37: prevImg(); // LEFT: trigger previous image
         break;

         case 39: nextImg(); // RIGHT: trigger next image
         break;

         default: return; // exit this handler for other keys
     }
     e.preventDefault(); // make sure screen doesn't scroll or anything dumb
   });
});

$('.js-light-box-close').click(function(e){
  e.stopPropagation;
  $(this).parent('.js-light-box')
    .fadeOut(1000)
    .parent('.gallery-item')
      .removeClass('is-expanded');
  $('.js-light-box-arrows').removeClass('is-visible');
  return false;
});

$('.js-more-info').click(function(){
  $('.js-light-box-close').toggleClass('is-hidden');
  $('.js-more-info').text(function(i, text){
    return text === "Show info" ? "Hide info" : "Show info";
  });
  $('.js-light-box-txt').toggleClass('is-displayed');
});

$('.js-light-box-arrow.prev').click(prevImg);
$('.js-light-box-arrow.next').click(nextImg);

// Swipe Gestures

$('.js-light-box').swipe({ // user swipes on slide
  swipeRight:function() { // user swipes right <3
    prevImg(); // run previous image function
  },
  swipeLeft:function() { // user swipes left </3
    nextImg(); // run next image function
  },
  threshold:68 // min swipe length of 68px
});
