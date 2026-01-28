import '../scss/style.scss'

let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
  setTimeout(() => {
    backdrop.classList.toggle('active')
  }, 300)
})

// Читать далее
let readMores = document.querySelectorAll('.read-more')

readMores.forEach((readMore) => {
  let readMoreBtn = readMore.querySelector('.read-more__button')
  let readMoreContent = readMore.querySelector('.read-more__content')
  let readMoreBtnText = readMoreBtn.dataset.textBtn

  readMoreBtn.addEventListener('click', () => {
    if (readMoreBtn.classList.contains('read')) {
      readMoreContent.classList.remove('read')
      readMoreBtn.classList.remove('read')
      readMoreBtn.querySelector('.read-more__button-text').textContent =
        readMoreBtnText
    } else {
      readMoreContent.classList.add('read')
      readMoreBtn.classList.add('read')
      readMoreBtn.querySelector('.read-more__button-text').textContent =
        'Скрыть'
    }
  })
})

// Swiper.js
new Swiper('.repair__slider', {
  slidesPerView: 1.2,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: {
      enabled: false
    }
  }
})

new Swiper('.price__slider', {
  slidesPerView: 1.2,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: {
      enabled: false
    }
  }
})

//Modal

let feedbackBtn = document.querySelector('.feedback-btn')
let requestBtn = document.querySelector('.request-btn')

let modalFeedback = document.querySelector('.modal-feedback')
let modalRequest = document.querySelector('.modal-request')

feedbackBtn.addEventListener('click', () => {
  modalFeedback.classList.add('active')
  setTimeout(() => {
    backdrop.classList.add('active')
  }, 300)

  modalFeedback.querySelector('.modal__close').addEventListener('click', () => {
    modalFeedback.classList.remove('active')
    if (menu.classList.contains('active')) return
    setTimeout(() => {
      backdrop.classList.remove('active')
    }, 300)
  })
})

requestBtn.addEventListener('click', () => {
  modalRequest.classList.add('active')
  setTimeout(() => {
    backdrop.classList.add('active')
  }, 300)

  modalRequest.addEventListener('click', () => {
    modalRequest.classList.remove('active')
    if (menu.classList.contains('active')) return
    setTimeout(() => {
      backdrop.classList.remove('active')
    }, 300)
  })
})
