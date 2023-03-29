document.addEventListener('DOMContentLoaded', () => {

  // Check required values
  const email = document.querySelector('.form__body-inputEmail')

  // Sending logic
  const successText = document.querySelector('.form__successText')

  $('.form__body').submit(function (e) {
    e.preventDefault();
    if (email.value) {
      email.classList.remove('redPlaceholder')
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");

        successText.setAttribute('style', 'display: block')
        $('form').trigger('reset');
      });
      return false;
    } else {
      email.classList.add('redPlaceholder')
    }
  });
})