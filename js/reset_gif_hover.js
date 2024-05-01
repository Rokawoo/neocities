document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    const staticImg = box.querySelector('.static-img');
    const animatedImg = box.querySelector('.animated-img');

    box.dataset.originalSrc = animatedImg.src;

    box.addEventListener('mouseenter', () => {
      animatedImg.src = box.dataset.originalSrc;
    });
  });
});
