document.addEventListener('mousemove', function (e) {
  const { clientX, clientY } = e;
  const mouseX = (clientX / window.innerWidth - 0.5) * 50;
  const mouseY = (clientY / window.innerHeight - 0.5) * 50;
  const transformValue = `translate(${mouseX}px, ${mouseY}px)`;
  document.querySelector('.background').style.transform = transformValue;
});
