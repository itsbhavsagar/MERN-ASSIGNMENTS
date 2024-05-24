document.addEventListener('DOMContentLoaded', (event) => {
  const images = [
    'images/pexels-minan1398-1234035.jpg',
    'images/pexels-therato-3408744.jpg',
    'images/pexels-freestockpro-321552.jpg',
  ];

  let currentIndex = 0;
  const slideshow = document.getElementById('slideshow');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', showPreviousImage);
  nextBtn.addEventListener('click', showNextImage);

  function showPreviousImage() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    slideshow.src = images[currentIndex];
  }

  function showNextImage() {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    slideshow.src = images[currentIndex];
  }
});
