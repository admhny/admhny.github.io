var $contactForm = $('.contact-form');
if ($contactForm.length) {
  $contactForm.validate({
    submitHandler: function(form) {
      $.ajax({
        url: '//formspree.io/adam@adamhaney.co',
        method: 'POST',
        data: $contactForm.serialize(),
        dataType: "json",
        success: function(data) {
          console.log('success');
          $('.submit-success').fadeIn(300);
        }
      });
    }
  });
}
$('.submit-close').click(function() {
  $('.submit-success').fadeOut(300);
});
