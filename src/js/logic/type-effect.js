export class TypeEffect {
    constructor(className = '.js-type-effect', options) {
        this.wrapper = document.querySelector(className) 
        this.options = options
        if (!this.wrapper) {
            return false
        }
        this.linesArray = []
        this.wordsArray = []
        this.spanArray = []
        this.wordDelay = 100
        this.lineLength = 0
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
        this.linesArray.forEach((line, index) => {
            this.wordsArray[index].forEach((word, i) => {
                const span = document.createElement('span')
                span.textContent = word + ' '
                span.classList.add('opacity-0')
                line.appendChild(span)
                this.spanArray.push(span)
                setTimeout(() => {
                span.classList.add('ll-show-type-effect')
                }, this.wordDelay * i + this.lineLength * this.wordDelay)
            })
            this.lineLength += this.wordsArray[index].length
        })
    
        this.animationDuration = this.lineLength

        setTimeout(() => {
            if (this.options?.callback) {
                this.options.callback()
            }
        }, this.animationDuration * this.wordDelay)
    }

    playTypeEffect = () => {
        this.splitLineInWords()
        this.emptyLines()
        this.animateLines()
    }
}


