import { app } from "../../main"

export class Heart {
    constructor() {
        this.heart = document.querySelector('.js-heart')
        if (!this.heart) {
            return false
        }
        this.heartRect = this.heart.getBoundingClientRect()
        this.heartRectangles = this.heart.querySelectorAll('.js-heart-rectangle')
        this.centerX = 0
        this.centerY = 0
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        window.addEventListener('resize', this.reportWindowSize)
        this.heartRectangles.forEach(rectangle => {
            rectangle.addEventListener('mouseenter', () => {
                this.heartCalculation(rectangle)
                this.showMarquee(rectangle)
            })

            rectangle.addEventListener('mouseleave', () => {
                this.leaveHeartRect()
                this.hideMarquee()
            })
        })
    }

    reportWindowSize = () => {
        this.heartRect = this.heart.getBoundingClientRect()
    }

    heartCalculation = (rectangle) => {
        let rect = rectangle.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const values = {
            cursorOutside: {
                x: centerX,
                y: centerY,
            },
            cursorInside: {
                x: centerX - this.heartRect.left + this.heartRect.width / 2,
                y: centerY - this.heartRect.top + this.heartRect.height / 2,
            }
        }
        app.cursor.snapTo(values)
    }

    leaveHeartRect = () => {
        app.cursor.release()
    }

    showMarquee = (rectangle) => {
        app.page.marquee.showMarquee(rectangle)
    }

    hideMarquee = () => {
        app.page.marquee.hideMarquee()
    }
}
