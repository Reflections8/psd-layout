document.addEventListener('DOMContentLoaded', () => {

  // Sending logic
  const successText = document.querySelector('.form__successText')

  $('.form__body').submit(function (e) {
    e.preventDefault();
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
  });
})