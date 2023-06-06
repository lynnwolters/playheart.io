export class TypeEffect {
    constructor() {
        this.wrapper = document.querySelector('.js-type-effect-wrapper') 
        if (!this.wrapper) {
            return false
        }
        this.lines = []
        this.wordLines = []
        this.init()
    }

    init = () => {
        this.getLettersPerLine()
        this.emptyLines()
        this.animateLines()
    }

    getLettersPerLine = () => {
        this.lines = [...this.wrapper.querySelectorAll('p')]
        this.wordLines = this.lines.map(p => {
            return p.textContent.split('')
        })
    }

    emptyLines = () => {
        this.lines.forEach(line => {
            line.textContent = ''
        })
        this.wrapper.style.opacity = 1
    }

    animateLines = () => {
        this.lines.forEach((line, index) => {
        let lineDuration = 50 * this.wordLines[index].length
        console.log(lineDuration)
        setTimeout(() => {
            this.wordLines[index].forEach((letter, i) => {
            setTimeout(() => {
                line.innerHTML += letter
            }, 50 * i)
            })
        }, lineDuration * index)
        })
    }
}













