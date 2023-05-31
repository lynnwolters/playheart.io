export class HamburgerMenu {
    constructor() {
        this.init()
    }

    init = () => {
        this.mobileMenu = document.querySelector('.js-mobile-menu')
        this.openMobileMenu = document.querySelector('.js-open-mobile-menu')
        this.closeMobileMenu = document.querySelector('.js-close-mobile-menu')

        this.bindEvents()
    }

    bindEvents = () => {
        this.openMobileMenu.addEventListener('click', () => {
            this.toggleMenu()
        })

        this.closeMobileMenu.addEventListener('click', () => {
            this.toggleMenu()
        })
    }

    toggleMenu = () => {
        this.mobileMenu.classList.toggle('open')
    }
}