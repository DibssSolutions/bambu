// import { buildIcon } from './_utils';
export const buildIcon = name => `<svg class="icon icon-${name}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${name}"></use></svg>`;

import slick from 'slick-carousel';

var prev = buildIcon('chevron-left');
var next = buildIcon('chevron-right');


$(document).ready(function() {

  /* MAIN SLIDER */
  var slider = $('.js-slider');

  $(slider).on('init', function(event, slick) {
    $(slider).css({ opacity: '1', visibility: 'visible' });
  });

  $(slider).slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    centerMode: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    centerPadding: '1px',
    variableWidth: true,
    prevArrow: `<button class="btn-slider btn-slider_prev" type="button">${prev}</button>`,
    nextArrow: `<button class="btn-slider btn-slider_next" type="button">${next}</button>`,
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    responsive: [
      // {
      //   breakpoint: 1022,
      //   settings: {
      //     arrows: false
      //   }
      // },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          arrows: false
        }
      }
    ]
  });


  /* MOBILE ONLY SLIDER ON MAIN PAGE */

  var mobSlider = $('.js-clients-slider');
  
  /* Initialisation */
  function mobileOnlySlider() {
    $(mobSlider).slick({
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      mobileFirst: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1022,
          settings: 'unslick'
        }
      ]
    });
  }

  $(window).on('load resize orientationchange', function(e) {
    if (window.innerWidth < 1022) {
      if (!$(mobSlider).hasClass('slick-initialized')) {
        mobileOnlySlider();
      }
    } else {
      if ($(mobSlider).hasClass('slick-initialized')) {
        $(mobSlider).removeClass('slick-initialized');
      }
    }
  });
});
