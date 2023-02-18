// Открытие\закрытие меню
const open = document.querySelector('#open')
const close = document.querySelector('#close')
const burger_content = document.querySelector('#burger_content')

open.onclick = function() {
  burger_content.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

close.onclick = function() {
  burger_content.style.display = 'none'
  document.body.style.overflow = 'scroll'
}

// Слайдер
let swiper = new Swiper('.mySwiper', {
  spaceBetween: 0,
  loop: true,
  speed: 750,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '[data-slider-dots]',
    type: "bullets",
    clickable: true,
    bulletClass: "dot",
    bulletActiveClass: "dot_active",
    renderBullet: function (index, className) {
        return '<div class="' + className + '"></div>';
    },
},
})

// Все услуги
const services_btn = document.querySelector('#services_btn')
const active_content = document.querySelector('#active_content')

services_btn.onclick = function() {
  if (active_content.style.display = 'none') {
    active_content.style.display = 'flex'
    services_btn.remove()
  }
}
