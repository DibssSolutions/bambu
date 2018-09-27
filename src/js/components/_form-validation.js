import validate from 'jquery-validation';

$.validator.messages.required = 'Необходимо заполнить указанное поле';
$.validator.messages.number = 'Необходимо ввести целое число';

$.validator.setDefaults({
  debug: true
});

var calculateForm = $('.js-calculate-form');
var partyForm = $('.js-party-form');
var reserveForm = $('.js-reserve-form');
var myselfForm = $('.js-myself-form');
var bookingHall1 = $('.js-booking-hall-1');
var bookingHall2 = $('.js-booking-hall-2');
var bookingVeranda = $('.js-booking-veranda');
var bookingCaraoke = $('.js-booking-caraoke');

calculateForm.validate({
  rules: {
    'calculate-name': {
      required: true
    },
    'calculate-phone': {
      required: true
    },
    'calculate-number': {
      required: true,
      number: true
    }
  }
});

partyForm.validate({
  rules: {
    'party-name': {
      required: true
    },
    'party-phone': {
      required: true
    },
    'party-number-of-people': {
      required: true,
      number: true
    },
    'party-date': {
      required: true
    },
    'party-time': {
      required: true
    }
  }
});

reserveForm.validate({
  rules: {
    'reserve-date': {
      required: true
    },
    'reserve-time': {
      required: true
    }
  }
});

myselfForm.validate({
  rules: {
    'myself-name': {
      required: true
    },
    'myself-phone': {
      required: true
    },
    'myself-email': {
      required: true
    }
  }
});

bookingHall1.validate({
  rules: {
    'hall-1-name': {
      required: true
    },
    'hall-1-phone': {
      required: true
    },
    'hall-1-number-of-people': {
      required: true,
      number: true
    },
    'hall-1-date': {
      required: true
    },
    'hall-1-time': {
      required: true
    }
  }
});

bookingHall2.validate({
  rules: {
    'hall-2-name': {
      required: true
    },
    'hall-2-phone': {
      required: true
    },
    'hall-2-number-of-people': {
      required: true,
      number: true
    },
    'hall-2-date': {
      required: true
    },
    'hall-2-time': {
      required: true
    }
  }
});

bookingVeranda.validate({
  rules: {
    'veranda-name': {
      required: true
    },
    'veranda-phone': {
      required: true
    },
    'veranda-number-of-people': {
      required: true,
      number: true
    },
    'veranda-date': {
      required: true
    },
    'veranda-time': {
      required: true
    }
  }
});

bookingCaraoke.validate({
  rules: {
    'caraoke-name': {
      required: true
    },
    'caraoke-phone': {
      required: true
    },
    'caraoke-number-of-people': {
      required: true,
      number: true
    },
    'caraoke-date': {
      required: true
    },
    'caraoke-time': {
      required: true
    }
  }
});

var formSubmit = $('.js-btn-submit');

formSubmit.each((i, submit) => {
  $(submit).on('click', function(e) {
    var form = $(submit).closest('.js-form');
    form.valid();
    if (!form.valid()) {
      e.preventDefault();
    }
  });
});
