document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup-contactUs')
  const contactUsButton = document.querySelectorAll('.intro__contactBlock-link')

  contactUsButton.forEach(item => {
    item.addEventListener('click', () => {
      popup.classList.remove('popup-contactUsHidden')
    })
  })

  // Closing logic
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-contactUs') || e.target.classList.contains('grid-row')) {
      popup.classList.add('popup-contactUsHidden')
    }
  })

  // Check required values
  const email = document.querySelector('.popup-contactUs-form-inputEmail')

  // Sending logic
  const successText = document.querySelector('.popup-contactUs-form-successText')

  $('.popup-contactUs-form').submit(function (e) {
    e.preventDefault();
    if (email.value) {
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
    }
  });
})