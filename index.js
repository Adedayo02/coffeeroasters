let nav = document.querySelector('.nav-link')
let button = document.querySelector('#ham')

button.addEventListener('click', function () {
  nav.classList.add('open')
})

document.querySelector('.hero').addEventListener('click', function () {
  nav.classList.remove('open')
})