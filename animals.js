var slideshows = document.querySelectorAll('[data-component=slideshow]');
const title = document.querySelectorAll('.title');

// window.addEventListener('load', (event) => {
//   title.forEach(function (item) {
//     item.classList.add('addTitle');

//     console.log(item.classList);
//   });
// });

slideshows.forEach(initSlideshow);

function initSlideshow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role='list'] .slide`
  );

  var index = 0,
    time = 5000;

  slides[index].classList.add('active');
  if (slides[index].classList.contains('active')) {
    title.forEach(function (item) {
      item.classList.add('addTitle');

      console.log(item.classList, 'true');
    });
  }

  setInterval(() => {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0;

    slides[index].classList.add('active');
  }, time);
}
