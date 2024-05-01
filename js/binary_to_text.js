document.addEventListener("DOMContentLoaded", function () {
  function generateRandomBinary(length) {
    return Array.from({ length }, () => Math.round(Math.random())).join('');
  }

  function updateTextGradually(element, targetText, currentIndex) {
    if (currentIndex < targetText.length) {
      const randomBinary = generateRandomBinary(targetText.length - currentIndex);
      element.innerText = randomBinary + targetText.slice(currentIndex + randomBinary.length);
      setTimeout(() => updateTextGradually(element, targetText, currentIndex + 1), 300);
    } else {
      element.innerText = targetText;
    }
  }

  const elementsToTransform = document.querySelectorAll('.b2t');

  elementsToTransform.forEach(element => {
    const targetText = element.innerText;
    element.innerText = generateRandomBinary(targetText.length);
    updateTextGradually(element, targetText, 0);
  });
});
