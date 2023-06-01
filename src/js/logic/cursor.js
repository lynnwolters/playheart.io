export class Cursor {
    constructor() {
        this.heart = document.querySelector('.js-heart')
        if (!this.heart) {
            return false
        }
        this.cursorOutside = document.querySelector('.js-cursor-outside')
        this.cursorInside = document.querySelector('.js-cursor-inside')
        this.heartRect = this.heart.getBoundingClientRect()
        this.heartRects = document.querySelectorAll('.js-heart-rect')
        this.isInHeartRects = false
        this.isOnHeartRectGoals = false
        this.centerX = 0
        this.centerY = 0
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {        
        window.addEventListener('resize', this.reportWindowSize)
        document.addEventListener('mousemove', this.customCursor)
        document.addEventListener('mousemove', this.cursorGrow)
    }

    reportWindowSize = () => {
        this.heartRect = this.heart.getBoundingClientRect()
    }

    customCursor = ({ clientX, clientY, target }) => {
        this.heartRects.forEach(rectElement => {
            rectElement.addEventListener('mouseenter', () => {
                this.isInHeartRects = true
                const rect = rectElement.getBoundingClientRect()
                this.centerX = rect.left + rect.width / 2
                this.centerY = rect.top + rect.height / 2
                this.cursorOutside.style.transform = `translate3d(calc(${this.centerX}px - 50%), calc(${this.centerY}px - 50%), 0)`
            })
            rectElement.addEventListener('mouseleave', () => {
                this.isInHeartRects = false
            })
        })

        if (!this.isInHeartRects) {
            this.cursorOutside.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
        }
        
        if (target.closest('.js-heart')) {
            this.cursorInside.style.opacity = 1
            this.cursorInside.style.transform = `translate3d(calc(${clientX - this.heartRect.left}px), calc(${clientY - this.heartRect.top}px), 0)`
        } else {
            this.cursorInside.style.opacity = 0
        }
    }

    cursorGrow = () => {
        this.heartRects.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.cursorOutside.classList.add('ll-cursor-grow')
            })

            item.addEventListener('mouseleave', () => {
                this.cursorOutside.classList.remove('ll-cursor-grow')
            })
        })
    }
}




























