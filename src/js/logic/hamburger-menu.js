export class HamburgerMenu {
    constructor() {
        this.mobileMenu = document.querySelector('.js-mobile-menu')
        this.isOpen = false
        this.toggleMenuButton = document.querySelector('.js-toggle-mobile-menu')
        if (this.mobileMenu) {
            this.init()
        }
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.toggleMenuButton.addEventListener('click', () => {
            this.toggleNav()
            this.toggleButtonContent()
            if (!this.isOpen) {
                this.isOpen = true
            } else {
                this.isOpen = false
            }
        })
    }

    toggleNav = () => {
        this.mobileMenu.classList.toggle('opacity-0')
        this.mobileMenu.classList.toggle('opacity-100')
        this.mobileMenu.classList.toggle('pointer-events-none')
        this.mobileMenu.classList.toggle('pointer-events-auto')
    }

    toggleButtonContent = () => {
        if (!this.isOpen) {
            this.toggleMenuButton.innerHTML = 'close'
            this.toggleMenuButton.style.backgroundColor = '#111314'
            this.toggleMenuButton.style.color = '#F0D8E6'
            document.body.style.overflowY = 'hidden'
        } else {
            this.toggleMenuButton.innerHTML = 'menu'
            this.toggleMenuButton.style.backgroundColor = '#F0D8E6'
            this.toggleMenuButton.style.color = '#111314'
            document.body.style.overflowY = 'auto'
        }
    }
}