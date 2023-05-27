let openMobileMenu = document.querySelector('.js-open-mobile-menu')
let closeMobileMenu = document.querySelector('.js-close-mobile-menu')
let mobileMenu = document.querySelector('.js-mobile-menu')

openMobileMenu.addEventListener('click', toggleMenu)
closeMobileMenu.addEventListener('click', toggleMenu)

export function toggleMenu() { 
    mobileMenu.classList.toggle('open')
}

