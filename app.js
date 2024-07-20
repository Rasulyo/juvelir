document.addEventListener('DOMContentLoaded', function () {
  console.log('fff');
  document.querySelectorAll('.faq-sidebar a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove 'active' class from all faq-items
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('active');
      });

      // Add 'active' class to the clicked item
      const target = document.querySelector(this.getAttribute('href'));
      console.log(target, 'target before');
      target.classList.add('active');
      console.log(target, 'target after');

      // Scroll into view
      target.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});

const btn = document.getElementById('catalog');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const catalogText = btn.querySelector('.catalog__list-text');
const catalogMenu = document.getElementById('catalogMenu');

btn.addEventListener('click', () => {
  if (menuIcon.style.display === 'none') {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    btn.style.backgroundColor = '';
    catalogText.style.color = '';
    catalogMenu.style.display = 'none';
  } else {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    btn.style.backgroundColor = 'white';
    catalogText.style.color = 'black';
    catalogMenu.style.display = 'flex';
  }
});

const listItems = document.querySelectorAll('.catalog__lists li');

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all items
    listItems.forEach((i) => i.classList.remove('active'));
    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
