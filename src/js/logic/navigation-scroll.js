export class NavigationScroll {
    constructor() {
        this.subMenuItems = document.querySelectorAll('.js-sub-menu li')
        if (!this.subMenuItems) {
            return false
        }
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.subMenuItems.forEach(item => {
            window.addEventListener('scroll', () => {
                this.subMenuScroll(item)
            })
        })
    }
    
    subMenuScroll = (item) => {
        let sectionId = item.firstElementChild.getAttribute('href')
        let section = document.querySelector(sectionId)
        let sectionRect = section.getBoundingClientRect()
        if (section) {
            item.classList.toggle('active', sectionRect.top <= 0 && sectionRect.bottom > 0) 
        }
    }
}



