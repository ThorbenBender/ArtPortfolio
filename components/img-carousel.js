class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = element.querySelector('.swipe-left');

        this.rightButton = element.querySelector('.swipe-right');

        this.imgBox = element.querySelectorAll('.portfolio-img-box');

        this.imgBox[0].style.display = 'block';

        this.imgIndex = 0;

        this.leftButton.addEventListener('click', () => this.decrease());

        this.rightButton.addEventListener('click', () => this.increase());
    }
    increase() {
        this.imgIndex++;
        this.imgBox.forEach(img => img.style.display = 'none');
        if (this.imgIndex > this.imgBox.length - 1) {
            this.imgIndex = 0;
            console.log(this.imgIndex);
        } else {
            console.log(this.imgIndex);
        }
        this.currentImgBox = this.imgBox[this.imgIndex];
        this.currentImgBox.style.display = 'block';
    }
    decrease() {
        this.imgIndex--;
        this.imgBox.forEach(img => {
            img.style.display = 'none';
        });
        if (this.imgIndex < 0) {
            this.imgIndex = this.imgBox.length - 1;
            console.log(this.imgIndex);
        } else {
            console.log(this.imgIndex);
        }
        this.currentImgBox = this.imgBox[this.imgIndex];
        this.currentImgBox.style.display = 'block';
    }
}


let carousel = document.querySelectorAll('.portfolio-box-section').forEach(ca => new Carousel(ca));