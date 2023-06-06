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
        this.centerX = rect.left + rect.width / 2
        this.centerY = rect.top + rect.height / 2
        app.page.cursor.snapTo(this.centerX, this.centerY)
    }

    showMarquee = (rectangle) => {
        app.page.marquee.showMarquee(rectangle)
    }

    hideMarquee = () => {
        app.page.marquee.hideMarquee()
    }

    leaveHeartRect = () => {
        app.page.cursor.release()
    }
}
