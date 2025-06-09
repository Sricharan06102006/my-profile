// Typewriter effect
const text = "Web Developer | Designer | Creative Thinker";
let index = 0;
function type() {
  document.querySelector('.typewriter').textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 100);
  }
}
type();
