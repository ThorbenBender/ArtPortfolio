class Navbar {
    constructor(nav) {
        this.element = nav;
        this.button = document.querySelector('.nav-open-close');
        this.button.addEventListener('click', () => this.showNav());
        this.menu = document.querySelector('.main-container');
    }
    showNav() {
        this.element.classList.toggle('nav-show');
        this.menu.classList.toggle('header-visible');


    }
}

let navbars = document.querySelectorAll('.navbar').forEach(nav => new Navbar(nav));