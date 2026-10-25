$(function () {
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.site-navbar .nav-link').each(function () {
    if ($(this).attr('href') === currentPage) {
      $(this).addClass('active');
    }
  });

  $('[data-toggle="dropdown-locations"]').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300, function () {
      $('#locationsMenu').dropdown('show');
    });
  });
});
