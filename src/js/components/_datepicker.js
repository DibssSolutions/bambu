import { BODY } from '../constants';
import datepicker from 'bootstrap-datepicker';
import Inputmask from 'inputmask';

BODY.on('focus', 'input', function() {
  Inputmask().mask(this);
});

$('.js-datepicker').datepicker({
  format: 'dd.mm.yyyy',
  autoclose: true
});
