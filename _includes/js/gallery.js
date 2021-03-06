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

function closeLightbox() {

  $('.js-light-box')
    .fadeOut(1000, function(){

      $(this).children('.js-light-box-content')
        .removeAttr('style');

    }).parent('.gallery-item')
        .removeClass('is-expanded');

  $('.js-light-box-arrows').removeClass('is-visible');
  $('html, body').removeAttr('style')
    .unbind('touchmove, pinchZoom');
  return false;
}

$('.gallery-item').click(function(){ // When .gallery-item is clicked
  $(this)
    .addClass('is-expanded')
    .children('.js-light-box')
    .fadeIn(1000);
  $('.js-light-box-arrows').addClass('is-visible');
  $('html, body') // disable scrolling when lightbox is visible
      .css({'overflow':'hidden'})
      .bind('touchmove, pinchZoom', function(e){
        e.preventDefault();
      });
  $(document).keydown(function(e) { // user hits keys after clicking an image
     switch(e.which) {
         case 37: prevImg(); // LEFT: trigger previous image
         break;

         case 39: nextImg(); // RIGHT: trigger next image
         break;

         case 27: closeLightbox(); // Esc: close light box
         break;

         default: return; // exit this handler for other keys
     }
     e.preventDefault(); // make sure screen doesn't scroll or anything dumb
   });
});

$('.js-light-box-close').click(closeLightbox);

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

  swipeStatus:function(event, phase, directon, distance){

    var $lbContent = $(this).children('.js-light-box-content');

    if (directon=='left'){

      if (phase=='move') {

        $lbContent.css({

          'left': '-' + (distance/2) + '%'

        });

      }

      if (phase=='cancel') {

        $lbContent.removeAttr('style');

      }

      if (phase=='end') {

         nextImg();

        $lbContent.removeAttr('style');

      }

    }

    if (directon=='right'){

      if (phase=='move') {

        $lbContent.css({

          'left': (distance/2) + '%'

        });

      }

      if (phase=='cancel') {

        $lbContent.removeAttr('style');

      }

      if (phase=='end') {

         prevImg();

        $lbContent.removeAttr('style');

      }

    }

    if (directon=='down') {

      if (phase=='move') {

        $lbContent.css({

          'top': (distance/2) + '%'

        });

      }

      if (phase=='cancel') {

        $lbContent.removeAttr('style');

      }

      if (phase=='end') {

         closeLightbox();

      }

    }

  },

  triggerOnTouchEnd: false,
  triggerOnTouchLeave: false,
  threshold: 200,
  cancelThreshold: 42

});

// function closeInfo() {
//   $('.js-light-box-txt').toggleClass('is-displayed');
//   $('html, body').removeClass('overflow-hidden')
//   .off('touchmove');
// }
//
// $('.js-light-box-txt').swipe({ // user swipes on slide
//   swipeRight:function() {
//     closeInfo();
//   },
//   threshold:68 // min swipe length of 68px
// });
