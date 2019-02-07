let navbarOpenClose = document.querySelector('.nav-open-close');

let navbar = document.querySelectorAll('.navbar');


navbarOpenClose.addEventListener('click', () => {
    navbar.classList.toggle('nav-show');
})