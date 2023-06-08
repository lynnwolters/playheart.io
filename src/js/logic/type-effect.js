export class TypeEffect {
    constructor() {
        this.wrapper = document.querySelector('.js-type-effect-wrapper') 
        if (!this.wrapper) {
            return false
        }
        this.linesArray = []
        this.wordsArray = []
        this.spanArray = []
        this.delay = 175
        this.init()
    }

    init = () => {
        this.playTypeEffect()
    }

    splitLineInWords = () => {
        this.linesArray = [...this.wrapper.querySelectorAll('p')]
        this.wordsArray = this.linesArray.map(p => {
            return p.textContent.split(' ')
        })
        console.log(this.wordsArray)
    }

    emptyLines = () => {
        this.linesArray.forEach((line) => {
            line.textContent = ''
        })
    }

    animateLines = () => {
        let lineDelay = 0
        this.linesArray.forEach((line, index) => {
            this.wordsArray[index].forEach((word, i) => {
                const span = document.createElement('span')
                span.textContent = word + ' '
                span.classList.add('opacity-0')
                line.appendChild(span)
                this.spanArray.push(span)
                setTimeout(() => {
                    span.classList.add('ll-type-effect-fade-in')
                }, this.delay * i + lineDelay * this.delay)
            })
            lineDelay += this.wordsArray[index].length
        })
    }

    playTypeEffect = () => {
        this.splitLineInWords()
        this.emptyLines()
        this.animateLines()
    }
}


