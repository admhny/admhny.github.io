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
  $(this).text(function(i, text){
    return text === "Show info" ? "Hide info" : "Show info";
  });
  $('.js-light-box-txt').toggleClass('is-displayed');
});

$('.js-light-box-arrow.prev').click(prevImg);
$('.js-light-box-arrow.next').click(nextImg);
