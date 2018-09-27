$(document).ready(function() {
  $('.js-form').on('submit', e => {
    e.preventDefault();

    var form = $(e.currentTarget);
    var input = $(form).find('input');

    var urlPhpFile;
    // var cls;
    // $(form).hasClass(cls);

    // switch (cls) {
    //   case 'js-calculate-form':
    //     urlPhpFile = 'calculation_form.php';
    //     break;
    //   case 'js-party-form':
    //     urlPhpFile = 'party_form.php';
    //     break;
    //   case 'js-reserve-form':
    //     urlPhpFile = 'reserve_form.php';
    //     break;
    //   case 'js-myself-form':
    //     urlPhpFile = 'myself_form.php';
    //     break;
    //   default:
    //     console.log('Form handler is unknown');
    // }

    if ($(form).hasClass('js-party-form')) {
      urlPhpFile = 'party_form.php';
    } else if ($(form).hasClass('js-calculate-form')) {
      urlPhpFile = 'calculation_form.php';
    } else if ($(form).hasClass('js-reserve-form')) {
      urlPhpFile = 'reserve_form.php';
    } else if ($(form).hasClass('js-myself-form')) {
      urlPhpFile = 'myself_form.php';
    } else if ($(form).hasClass('js-booking-hall-1')) {
      urlPhpFile = 'booking_hall_1_form.php';
    } else if ($(form).hasClass('js-booking-hall-2')) {
      urlPhpFile = 'booking_hall_2_form.php';
    } else if ($(form).hasClass('js-booking-veranda')) {
      urlPhpFile = 'booking_veranda_form.php';
    } else if ($(form).hasClass('js-booking-caraoke')) {
      urlPhpFile = 'booking_caraoke_form.php';
    }

    $.ajax({
      url: urlPhpFile,
      type: 'POST',
      dataType: 'html',
      data: $(e.currentTarget).serialize(),
      success() {
        form.get(0).reset();
        var sentMessage = $('.js-success');
        sentMessage.fadeIn(1000);
        // sentMessage.fadeOut(5000);
      },
      error: function(jqXHR, ajaxSettings, thrownError) {
        var errorSent = $('.js-error');
        form.get(0).reset();
        errorSent.fadeIn(1000);
        // errorSent.fadeOut(5000);
        var closeBtn =
          '<button class="message-sending__x js-close">&#10006;</button>';

        if (jqXHR.status === 0) {
          errorSent.html('Not connect.\n Verify Network.' + closeBtn);
        } else if (jqXHR.status === 404) {
          errorSent.html('Requested page not found. 404' + closeBtn);
        } else if (jqXHR.status === 500) {
          errorSent.html('Internal Server Error 500.' + closeBtn);
        } else if (exception === 'parsererror') {
          errorSent.html('Requested JSON parse failed.' + closeBtn);
        } else if (exception === 'timeout') {
          errorSent.html('Превышено время отправки сообщения' + closeBtn);
        } else if (exception === 'abort') {
          errorSent.html('Ajax request aborted.' + closeBtn);
        } else {
          errorSent.html('Uncaught Error.\n' + jqXHR.responseText + closeBtn);
        }
      }
    });
  });

  $('.message-sending').on('click', function(e) {
    var target = event.target;

    if ($(target).hasClass('js-close')) {
      $(target)
        .parents('.message-sending')
        .fadeOut(500);
    }
  });
});
