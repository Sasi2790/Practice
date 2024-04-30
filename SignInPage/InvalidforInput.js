
const input = document.querySelector('.inputBox input');
input.addEventListener('input', function() {
  if (this.value) {
    this.classList.add('filled');
  } else {
    this.classList.remove('filled');
  }
});
