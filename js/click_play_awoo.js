document.addEventListener('DOMContentLoaded', function () {
  const mascotImage = document.getElementById('awoo');

  mascotImage.addEventListener('click', function () {
    const sound = new Audio('https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Awoo_vocals.mp3');
    sound.play();

    sound.addEventListener('ended', () => sound.remove());
  });
});
