//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');

      if (slider.classList.contains('_swiper_scroll')) {
        let sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');
        slider.appendChild(sliderScroll);
      }
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
  for (let index = 0; index < sliderScrollItems.length; index++) {
    const sliderScrollItem = sliderScrollItems[index];
    const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
    const sliderScroll = new Swiper(sliderScrollItem, {
      observer: true,
      observeParents: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false,
      },
      mousewheel: {
        releaseOnEdges: true,
      },
    });
    sliderScroll.scrollbar.updateSize();
  }
}

function sliders_bild_callback(params) {}
//========================================================================================================================================================
let sliderReviews = new Swiper('.slider-reviews__body', {
  /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 24,
  autoHeight: true,
  speed: 800,
  watchOverflow: true,
  slidesPerColumn: 'auto',
  //   observeSlideChildren: true,
  resizeObserver: true,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,

  pagination: {
    el: '.slider-reviews__dotts._dotts',
    clickable: true,
  },
  // Arrows
  navigation: {
    nextEl: '.slider-reviews__arrow.slider-reviews__arrow_next',
    prevEl: '.slider-reviews__arrow.slider-reviews__arrow_prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      autoHeight: true,
      slidesPerColumn: 'auto',
    },
    959.98: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 50,
    },
    1439.98: {
      slidesPerView: 2,
      spaceBetween: 32,
      autoHeight: true,
      slidesPerColumn: 'auto',
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});
//========================================================================================================================================================
//service-catalog.html (chips-slider)
let sliderChips = new Swiper('.ships-slider__body', {
  /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
  observer: true,
  observeParents: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoHeight: true,
  speed: 800,
  watchOverflow: true,
  //   observeSlideChildren: true,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,

  //   pagination: {
  //     el: '.slider-reviews__dotts._dotts',
  //     clickable: true,
  //   },
  // Arrows
  navigation: {
    nextEl: '.ships-slider__arrow.ships-slider__arrow_next',
    prevEl: '.ships-slider__arrow.ships-slider__arrow_prev',
  },

    breakpoints: {
      320: {
        spaceBetween: 6.5,
      },
      1439.98: {
        spaceBetween: 16,
      },
    },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});
