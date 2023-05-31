let line = [] 
let words = [] 
let wrapper = null 

function splitLineInWords() {
    line = wrapper.querySelector('p') 
    words = line.textContent.split(' ')
    console.log(words) 
}

function emptyLine() {
    line.textContent = ''
    wrapper.style.opacity = 1
}

function animateLine() {
    words.forEach((word, index) => {
    setTimeout(() => {
        const span = document.createElement('span')
        span.textContent = word
        span.classList.add('fade-in')
        line.appendChild(span)
      }, 400 * index)
    })
}

export function initTypeEffect() {
    wrapper = document.querySelector('.js-type-effect-wrapper') 
    if (!wrapper) return 
    splitLineInWords() 
    emptyLine()
    animateLine()
}

// let lines = []
// let wordLines = []
// let wrapper = null

// function getLettersPerLine() {
//     lines = [...wrapper.querySelectorAll('p')]
//     wordLines = lines.map(p => {
//         return p.textContent.split('')
//     })
// }

// function emptyLines() {
//     lines.forEach(line => {
//         line.textContent = ''
//     })
//     wrapper.style.opacity = 1
// }

// function animateLines() {
//     lines.forEach((line, index) => {
//         let lineDuration = 50 * wordLines[index].length
//         setTimeout(() => {
//             wordLines[index].forEach((letter, i) => {
//                 setTimeout(() => {
//                     line.innerHTML += letter
//                 }, 50 * i)
//             })
//         }, lineDuration * index)
//     })
// }

// export function initTypeEffect() {
//     console.log('initTypeEffect')

//     wrapper = document.querySelector('.js-type-effect-wrapper')
//     if (!wrapper) return

//     getLettersPerLine()
//     emptyLines()
//     animateLines()
// }









