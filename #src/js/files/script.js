//========================================================================================================================================================
tippy('[data-tippy-content]', {
  allowHTML: true,
  //interactive: true,
  maxWidth: 300,
  placement: 'bottom',
  appendTo: () => document.body,
  //trigger: 'click',
});
//========================================================================================================================================================

//SlideToggle
let _slideUp2 = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};
let _slideDown2 = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};
let _slideToggle2 = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown2(target, duration);
    } else {
      return _slideUp2(target, duration);
    }
  }
};

//=======================================================================================================================================================
//search
const search = document.querySelector('.search');
if (search) {
  const searchResults = document.querySelector('.results-search');
  const searchForm = document.querySelector('.search__form');
  const searchButton = document.querySelector('._search-button');
  searchForm.addEventListener('submit', searchAction);
  searchButton.addEventListener('click', searchAction);

  function searchAction(e) {
    const currentTarget = e.currentTarget;
    if (searchButton.classList.contains('_search-open') || currentTarget.classList.contains('search__form')) {
      if (form_validate(searchForm) === 0) {
        searchButton.classList.remove('_search-open');
        searchButton.classList.add('_search-close');
        setTimeout(() => {
          search.classList.add('_active');
        }, 250);
      }
      e.preventDefault();
    } else {
      search.classList.remove('_active');
      searchButton.classList.add('_search-open');
      searchButton.classList.remove('_search-close');

      document.querySelector('.search').style.cssText = ``;

      e.preventDefault();
    }
  }
}
//========================================================================================================================================================
//search-services
const searchServices = document.querySelector('.search-services');
if (searchServices) {
  const searchServicesResults = document.querySelector('.results-search-services');
  const searchServicesForm = document.querySelector('.search-services__form');
  const searchServicesButton = document.querySelector('._search-services-button');
  searchServicesForm.addEventListener('submit', searchServicesAction);
  searchServicesButton.addEventListener('click', searchServicesAction);

  function searchServicesAction(e) {
    const currentTarget = e.currentTarget;
    if (searchServicesButton.classList.contains('_search-services-open') || currentTarget.classList.contains('search-services__form')) {
      if (form_validate(searchServicesForm) === 0) {
        searchServicesButton.classList.remove('_search-services-open');
        searchServicesButton.classList.add('_search-services-close');
        setTimeout(() => {
          searchServices.classList.add('_active');
        }, 250);
      }
      e.preventDefault();
    } else {
      searchServices.classList.remove('_active');
      searchServicesButton.classList.add('_search-services-open');
      searchServicesButton.classList.remove('_search-services-close');

      document.querySelector('.search-services').style.cssText = ``;

      e.preventDefault();
    }
  }
}
//========================================================================================================================================================
const paymentMethodCards = document.querySelectorAll('._payment-method-cards');
if (paymentMethodCards) {
  for (let index = 0; index < paymentMethodCards.length; index++) {
    const elementCards = paymentMethodCards[index];
    elementCards.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.closest('.card-main-payment')) {
        const paymentMethodCardsActive = elementCards.querySelector('.card-main-payment._active');
        if (paymentMethodCardsActive) {
          paymentMethodCardsActive.classList.remove('_active');
        }
        const paymentMethodCardsItem = targetElement.classList.contains('card-main-payment')
          ? targetElement
          : targetElement.closest('.card-main-payment');
        paymentMethodCardsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
const methodButtons = document.querySelectorAll('._method-buttons');
if (methodButtons) {
  for (let index = 0; index < methodButtons.length; index++) {
    const elementButton = methodButtons[index];
    elementButton.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.closest('.method-button')) {
        const methodButtonsActive = elementButton.querySelector('.method-button._active');
        if (methodButtonsActive) {
          methodButtonsActive.classList.remove('_active');
        }
        const methodButtonsItem = targetElement.classList.contains('method-button') ? targetElement : targetElement.closest('.method-button');
        methodButtonsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
const paymentMethods = document.querySelectorAll('.payment-methods');
if (paymentMethods) {
  for (let index = 0; index < paymentMethods.length; index++) {
    const elementButton = paymentMethods[index];
    elementButton.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.closest('.item-payment-method')) {
        const paymentMethodsActive = elementButton.querySelector('.item-payment-method._active');
        if (paymentMethodsActive) {
          paymentMethodsActive.classList.remove('_active');
        }
        const paymentMethodsItem = targetElement.classList.contains('item-payment-method')
          ? targetElement
          : targetElement.closest('.item-payment-method');
        paymentMethodsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
document.addEventListener('click', documentActions);
function documentActions(e) {
  const targetElement = e.target;
  if (!targetElement.closest('.search') && document.querySelector('.search._active')) {
    document.querySelector('.search').classList.remove('_active');
    document.querySelector('._search-button').classList.remove('_search-close');
    document.querySelector('._search-button').classList.add('_search-open');
    document.querySelector('.search').style.cssText = ``;
  }
  if (!targetElement.closest('.search-services') && document.querySelector('.search-services._active')) {
    document.querySelector('.search-services').classList.remove('_active');
    document.querySelector('._search-services-button').classList.remove('_search-services-close');
    document.querySelector('._search-services-button').classList.add('_search-services-open');
    document.querySelector('.search-services').style.cssText = ``;
  }
  if (targetElement.closest('.header-alphabet__block-title') && window.innerWidth < 1439.98) {
    targetElement.classList.toggle('_active');
    targetElement.closest('.alphabet').querySelector('.alphabet__main');
    _slideToggle2(targetElement.closest('.alphabet').querySelector('.alphabet__main'), 500);
  }
  if (targetElement.closest('.button-ambassador-menu') && window.innerWidth < 959.98) {
    _slideToggle2(targetElement.closest('.ambassador-menu').querySelector('.ambassador-menu__content'), 300);
  }
}
//========================================================================================================================================================
//profile
