import { app } from '../../main' 

export class Cursor {
    constructor() {
        this.cursorOutside = document.querySelector('.js-cursor-outside')
        if (!this.cursorOutside) {
            return false
        }
        this.cursorInside = document.querySelector('.js-cursor-inside')
        // this.isInHeartRects = false
        this.update = true
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {    
        document.addEventListener('mousemove', this.customCursor)
    }

    // ******************************************************* //

    customCursor = ({ clientX, clientY, target }) => {
        // heartRectangles.forEach(rectElement => {
        //     rectElement.addEventListener('mouseenter', () => {
        //         isInHeartRects = true
        //         cursorOutside.style.transform = `translate3d(calc(${centerX}px - 50%), calc(${centerY}px - 50%), 0)`
        //     })
        //     rectElement.addEventListener('mouseleave', () => {
        //         isInHeartRects = false
        //     })
        // })
    
        // if (!isInHeartRects) {
        if (this.update) {
            this.cursorOutside.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
        }
        // }
        
        // if (target.closest('.js-heart')) {
        //     cursorInside.style.opacity = 1
        //     cursorInside.style.transform = `translate3d(calc(${clientX - heartRect.left}px), calc(${clientY - heartRect.top}px), 0)`
        // } else {
        //     cursorInside.style.opacity = 0
        // }
    }

    // ******************************************************* //

    snapTo = (x, y) => {
        this.update = false
        this.cursorOutside.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
        this.cursorOutside.classList.add('ll-cursor-grow')
    }

    release = () => {
        this.update = true
        this.cursorOutside.classList.remove('ll-cursor-grow')
    }
}




























