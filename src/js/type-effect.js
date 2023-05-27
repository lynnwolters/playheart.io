let lines = []
let wordLines = []
const wrapper = document.querySelector('.js-type-effect-wrapper')

function getLettersPerLine() {
    if (!wrapper) return
    lines = [...wrapper.querySelectorAll('p')]
    wordLines = lines.map(p => {
        return p.textContent.split('')
    })
}

function emptyLines() {
    lines.forEach(line => {
        line.textContent = ''
    })
    wrapper.style.opacity = 1
}

function animateLines() {
    lines.forEach((line, index) => {
        let lineDuration = 50 * wordLines[index].length
        setTimeout(() => {
            wordLines[index].forEach((letter, i) => {
                setTimeout(() => {
                    line.innerHTML += letter
                }, 50 * i)
            })
        }, lineDuration * index)
    })
}

export function initTypeEffect() {
    getLettersPerLine()
    emptyLines()
    animateLines()
}





