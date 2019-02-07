class Navbar {
    constructor(nav) {
        this.element = nav;
        this.button = document.querySelector('.nav-open-close');
        this.menu = document.querySelector('.main-container');
        this.button.addEventListener('click', () => this.closeOrOpen());
        this.menu.addEventListener('click', () => this.hideNav());
    }
    closeOrOpen(){
        if (this.element.classList.contains('nav-show')){
            this.hideNav();
        }
        else{
            this.showNav();
        }
    }
    showNav() {
        this.element.classList.add('nav-show');
        this.menu.classList.add('header-visible');
        event.stopImmediatePropagation();
    }
    hideNav(){
        this.element.classList.remove('nav-show');
        this.menu.classList.remove('header-visible');
    }
}

let navbars = document.querySelectorAll('.navbar').forEach(nav => new Navbar(nav));