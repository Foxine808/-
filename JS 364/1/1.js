const input = document.getElementById('input');
const paragraph = document.getElementById('p');

input.addEventListener('blur', () => {
  paragraph.textContent += ' ' + input.value;
});
