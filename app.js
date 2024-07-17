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