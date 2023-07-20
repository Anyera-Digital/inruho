/*** Change radio ***/
$('.radio__input').on('click', function () {
  $('.radio').removeClass('btn--bg-radio');
  $(this).closest('.radio').addClass('btn--bg-radio')
});

/*** Subscribe ***/
$('.js-subscribe').on('submit', function (e) {
  e.preventDefault();

  console.log('submit subscribe form');
});
