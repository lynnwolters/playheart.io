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

    handleRouteChange = () => {
        this.release()
        this.cursorInside = document.querySelector('.js-cursor-inside')
    }

    bindEvents = () => {    
        document.addEventListener('mousemove', this.customCursor)
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

    removeCursor = () => {
        this.cursorOutside.style.display = 'none'
    }

    addCursor = () => {
        this.cursorOutside.style.display = 'block'
    }
}





























