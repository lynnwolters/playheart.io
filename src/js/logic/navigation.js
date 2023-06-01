export class Navigation {
    constructor() {
        this.subMenuItems = document.querySelectorAll('.js-sub-menu li')
        if (this.subMenuItems) {
            this.init()
        }
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        window.addEventListener('scroll', this.subMenuScroll)
    }
    
    subMenuScroll = () => {
        this.subMenuItems.forEach(item => {
            let sectionId = item.firstElementChild.getAttribute('href')
            let section = document.querySelector(sectionId)
            let sectionRect = section.getBoundingClientRect()
            if (section) {
                item.classList.toggle('active', sectionRect.top <= 0 && sectionRect.bottom > 0) 
            }
        })
    }
}



