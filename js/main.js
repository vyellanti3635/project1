$(function () {
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.site-navbar .nav-link').each(function () {
    if ($(this).attr('href') === currentPage) {
      $(this).addClass('active');
    }
  });

  $('[data-toggle="dropdown-locations"]').on('click', function (event) {
    event.preventDefault();
    $('.navbar-collapse').collapse('show');
    $('html, body').animate({ scrollTop: 0 }, 300, function () {
      $('#locationsMenu').dropdown('show');
    });
  });

  var $modal = $('#signInModal');
  var $form = $('#signInForm');
  var $title = $('#signInTitle');
  var $nameGroup = $form.find('.signin-name');
  var $name = $('#signInName');
  var $email = $('#signInEmail');
  var $password = $('#signInPassword');
  var $submit = $form.find('.signin-submit');
  var $switch = $form.find('.signin-switch');
  var $message = $form.find('.signin-message');
  var signUpMode = false;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function isNameValid() {
    return !signUpMode || $.trim($name.val()).length >= 2;
  }

  function isEmailValid() {
    return emailPattern.test($.trim($email.val()));
  }

  function isPasswordValid() {
    return $password.val().length >= 6;
  }

  function markField($field, valid, touched) {
    if (!touched) {
      $field.removeClass('is-invalid');
      return;
    }
    $field.toggleClass('is-invalid', !valid);
  }

  function updateFormState() {
    markField($name, isNameValid(), $name.data('touched'));
    markField($email, isEmailValid(), $email.data('touched'));
    markField($password, isPasswordValid(), $password.data('touched'));
    var allValid = isNameValid() && isEmailValid() && isPasswordValid();
    $submit.prop('disabled', !allValid);
  }

  function setMode(signUp) {
    signUpMode = signUp;
    $nameGroup.toggleClass('d-none', !signUp);
    $title.text(signUp ? 'Sign Up' : 'Sign In');
    $submit.text(signUp ? 'Create Account' : 'Sign In');
    $switch.text(signUp ? 'Back to Sign In' : 'Sign Up');
    $password.attr('autocomplete', signUp ? 'new-password' : 'current-password');
    $message.addClass('d-none').text('');
    updateFormState();
  }

  function resetForm() {
    $form[0].reset();
    $form.find('.form-control').removeData('touched').removeClass('is-invalid');
    setMode(false);
  }

  $form.find('.form-control').on('input blur', function () {
    $(this).data('touched', true);
    updateFormState();
  });

  $switch.on('click', function () {
    setMode(!signUpMode);
    if (signUpMode) {
      $name.trigger('focus');
    }
  });

  $form.on('submit', function (event) {
    event.preventDefault();
    $form.find('.form-control').data('touched', true);
    updateFormState();
    if ($submit.prop('disabled')) {
      return;
    }
    var address = $.trim($email.val());
    var text = signUpMode
      ? 'Welcome to Splashes! Your account for ' + address + ' has been created.'
      : 'Welcome back! You are signed in as ' + address + '.';
    $message.text(text).removeClass('d-none');
    $submit.prop('disabled', true);
    window.setTimeout(function () {
      $modal.modal('hide');
    }, 1800);
  });

  $modal.on('shown.bs.modal', function () {
    $email.trigger('focus');
  });

  $modal.on('hidden.bs.modal', resetForm);

  var $locationsList = $('#locationsList');

  function renderLocationColumn(regions) {
    var $column = $('<div class="col-md-4 mega-region"></div>');
    $.each(regions, function (index, region) {
      var $list = $('<ul></ul>');
      $.each(region.schools, function (schoolIndex, school) {
        $list.append($('<li></li>').append($('<a href="#"></a>').text(school)));
      });
      $column.append($('<h3 class="mega-region-title"></h3>').text(region.name)).append($list);
    });
    return $column;
  }

  function renderLocations(data) {
    var regions = data.regions || [];
    var perColumn = Math.ceil(regions.length / 3);
    var columns = [];
    for (var i = 0; i < regions.length; i += perColumn) {
      columns.push(regions.slice(i, i + perColumn));
    }
    $locationsList.empty();
    $.each(columns, function (index, group) {
      $locationsList.append(renderLocationColumn(group));
    });
  }

  function loadLocations() {
    $.ajax({
      url: 'data/locations.json',
      dataType: 'json',
      cache: true
    }).done(renderLocations).fail(function (jqXHR, textStatus) {
      $locationsList.html('<div class="col-12 locations-status is-error">Locations could not be loaded (' + textStatus + '). Please call your nearest region.</div>');
    });
  }

  loadLocations();
});
