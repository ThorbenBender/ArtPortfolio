class Navbar {
    constructor(element) {
        this.element = element;
        this.button = document.querySelector('.nav-open-close');
        this.button.addEventListener('click', () => this.showNav());
        this.menu = document.querySelector('.main-container');
        console.log(this.menu.classList);
    }
    showNav() {
        setTimeout(() => this.element.classList.toggle('nav-show'), 500);
        setTimeout(() => this.menu.classList.toggle('header-visible'), 500);

        console.log(this.menu.classList);
    }
}

let navbars = document.querySelectorAll('.navbar').forEach(nav => new Navbar(nav));