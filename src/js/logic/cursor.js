export class Cursor {
    constructor() {
        this.cursorOutside = document.querySelector('.js-cursor-outside')
        if (!this.cursorOutside) {
            return false
        }
        this.cursorInside = document.querySelector('.js-cursor-inside')
        this.update = true
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {    
        document.addEventListener('mousemove', this.customCursor)
    }

    customCursor = ({ clientX, clientY }) => {
        if (this.update) {
            this.cursorOutside.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
        }
    }

    snapTo = (x, y, heartRect) => {
        this.update = false
        this.cursorOutside.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
        this.cursorOutside.classList.add('ll-cursor-grow')
        this.cursorInside.style.transform = `translate3d(calc(${x - heartRect.left + heartRect.width / 2}px - 50%), calc(${y - heartRect.top + heartRect.height / 2}px - 50%), 0)`
        this.cursorInside.style.opacity = 1
    }

    release = () => {
        this.update = true
        this.cursorOutside.classList.remove('ll-cursor-grow')
        this.cursorInside.style.opacity = 0
    }

    removeCursor = () => {
        this.cursorOutside.style.display = 'none'
    }

    addCursor = () => {
        this.cursorOutside.style.display = 'block'
    }
}




























