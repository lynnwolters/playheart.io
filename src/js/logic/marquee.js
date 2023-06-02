export class Marquee {
    constructor() {
        this.marqueeWrapper = document.querySelector('.js-marquee-wrapper')
        if (!this.marqueeWrapper) {
            return false
        }
        this.init()
    }

    init = () => {}
}




