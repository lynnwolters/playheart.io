export class Cursor {
    constructor() {
        this.cursorOutside = document.querySelector('.js-cursor-outside')
        if (!this.cursorOutside) {
            return false
        }
        this.cursorInside = document.querySelector('.js-cursor-inside')
        this.update = false
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {    
        document.addEventListener('mousemove', this.customCursor)
        this.bindShrinkElements()
    }

    handleRouteChange = () => {
        this.release()
        this.bindShrinkElements()
        this.cursorInside = document.querySelector('.js-cursor-inside')
    }

    bindShrinkElements = () => {
        let cursorShrinkSelector = document.querySelectorAll('.js-cursor-shrink-selector')
        cursorShrinkSelector.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.fadeCursor()
            })
            item.addEventListener('mouseleave', () => {
                this.removeFadeCursor()
            })
        })
    }

    customCursor = ({ clientX, clientY }) => {
        if (this.update) {
            this.cursorOutside.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
        }
    }

    snapTo = (values) => {
        this.update = false
        this.cursorOutside.style.transform = `translate3d(calc(${values.cursorOutside.x}px - 50%), calc(${values.cursorOutside.y}px - 50%), 0)`
        this.cursorOutside.classList.add('ll-cursor-grow')
        this.cursorInside.style.transform = `translate3d(calc(${values.cursorInside.x}px - 50%), calc(${values.cursorInside.y}px - 50%), 0)`
        this.cursorInside.style.opacity = 1
    }

    release = () => {
        this.update = true
        this.cursorOutside.classList.remove('ll-cursor-grow')
        if (this.cursorInside) {
            this.cursorInside.style.opacity = 0
        }
    }

    fadeCursor = () => {
        this.cursorOutside.classList.add('fade-cursor')
    }

    removeFadeCursor = () => {
        this.cursorOutside.classList.remove('fade-cursor')
    }
}





























