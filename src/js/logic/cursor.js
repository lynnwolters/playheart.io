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
                this.shrinkCursor()
            })
            item.addEventListener('mouseleave', () => {
                this.removeShrinkCursor()
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
        this.cursorOutside.style.transform = `translate3d(calc(${values.cursorOutside.x}px - 50%), calc(${values.cursorOutside.y}px - 50%), 0) scale(1)`
        this.cursorOutside.classList.add('ll-cursor-grow')
        this.cursorInside.style.transform = `translate3d(calc(${values.cursorInside.x}px - 50%), calc(${values.cursorInside.y}px - 50%), 0) scale(1)`
        this.cursorInside.style.opacity = 1
    }

    release = () => {
        this.update = true
        this.cursorOutside.classList.remove('ll-cursor-grow')
        if (this.cursorInside) {
            this.cursorInside.style.opacity = 0
        }
    }

    shrinkCursor = () => {
        this.cursorOutside.style.width = '.75em'
        this.cursorOutside.style.transition = 'all .2s linear';
    }

    removeShrinkCursor = () => {
        this.cursorOutside.style.width = ''
        this.cursorOutside.style.transition = '';
    }
}





























