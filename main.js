/*** Change radio ***/
$('.radio__input').on('click', function () {
  $('.radio').removeClass('btn--bg-radio');
  $(this).closest('.radio').addClass('btn--bg-radio');
});

/*** Subscribe ***/
const scriptURL = 'https://script.google.com/macros/s/AKfycbzKNm8F-XTW8I7D94C1Z3xJU3E5xIQQUUwzvTGUuHMGwAzPM-bpa9A81kJ8DcKUZSNf/exec'
const form = document.forms['subscribe-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', mode: "no-cors", body: new FormData(form)})
      .then(response => {
        e.target.reset();

        $('.radio').removeClass('btn--bg-radio');
        $('.radio:first').addClass('btn--bg-radio');
        $('.form__message').addClass('form__message--success');
        $('.form__message').html('Подписка оформлена успешно');


        setTimeout(() => {
          $('.form__message').html('');
          $('.form__message').removeClass('form__message--success');
        }, 3000);
      })
      .catch(error => {
        $('.form__message').addClass('form__message--error');
        $('.form__message').html(error.message);

        setTimeout(() => {
          $('.form__message').html('');
          $('.form__message').removeClass('form__message--error');
        }, 3000);
      })
})

/*** Menu ***/
// Open menu
$('.js-company-details-menu').on('click', function (e) {
  e.preventDefault();

  $('body').addClass('no-scroll menu-open');
});

// Close menu
$('.js-close-menu').on('click', function () {
  $('body').removeClass('no-scroll menu-open');
});

/*** Timer ***/
const endDate = new Date(2023,11,1,0,0); // end date

const timeLeft = () => {
  const date = new Date(); // current date
  let secondsLeft = (endDate - date) / 1000; // seconds left

  if (secondsLeft > 0) {
    let minutesLeft = secondsLeft / 60; // minutes left
    let hoursLeft = minutesLeft / 60; // hours left
    let daysLeft = hoursLeft / 24; // days left

    hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;

    $('.js-timer .days').html(Math.floor(daysLeft));
    $('.js-timer .hours').html((Math.floor(hoursLeft) < 10) ? `0${Math.floor(hoursLeft)}` : Math.floor(hoursLeft));
    $('.js-timer .minutes').html((Math.floor(minutesLeft) < 10) ? `0${Math.floor(minutesLeft)}` : Math.floor(minutesLeft));
    $('.js-timer .seconds').html((Math.floor(secondsLeft) < 10) ? `0${Math.floor(secondsLeft)}` : Math.floor(secondsLeft));
  }
  else {
    return false
  }

  timer();
}

const timer = () => {
  setTimeout(timeLeft, 1000);
}

timeLeft();
