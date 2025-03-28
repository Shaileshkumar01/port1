function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const glowCursor = document.getElementById('glow-cursor');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  glowCursor.style.left = `${x}px`;
  glowCursor.style.top = `${y}px`;
});

document.addEventListener('mousedown', () => {
  glowCursor.style.backgroundColor = 'rgba(95, 125, 95, 0.7)'; /* Darker dirty green on click */
});

document.addEventListener('mouseup', () => {
  glowCursor.style.backgroundColor = 'rgba(72, 100, 72, 0.6)'; /* Back to default dirty green */
});

