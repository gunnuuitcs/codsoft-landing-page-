const explore_btn = document.querySelector('#explore_btn')
const services = document.querySelector('#services')
explore_btn.addEventListener('click',function () {
    services.scrollIntoView({ behavior:"smooth"})
})

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})