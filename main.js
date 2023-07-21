/*** Change radio ***/
$('.radio__input').on('click', function () {
  $('.radio').removeClass('btn--bg-radio');
  $(this).closest('.radio').addClass('btn--bg-radio');
});

/*** Subscribe ***/
$('.js-subscribe').on('submit', function (e) {
  e.preventDefault();

  console.log('submit subscribe form');
});

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
