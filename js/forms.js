$('#email').blur(validate('#email')).keyup(validate('#email')).focus();
$('#password').blur(validate('#password')).keyup(validate('#password'));

function validate(selector) {
  var $el = $(selector), $error = $('.error-message');

  return function () {
    if ($el.val().trim().length === 0) {
      $el.addClass('error');
      $el.focus();

      $error.html('Field cannot be empty.');
      $error.addClass('is-visible');
    } else {
      $el.removeClass('error');
      $error.removeClass('is-visible');
    }
  };
}

$('form').submit(function (e) {
  if ($('#password').val() === '123') {
    $('body').addClass('logged-in');
  } else {
    alert('Invalid!');
  }

  e.preventDefault();
});
