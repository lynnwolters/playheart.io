// VARIABLES
let typeEffect = document.querySelector('.js-type-effect')
let text = 'Take a look inside the heart of Tree by Tree...'
let textLength = 0
let interval = null

// EMPTY STRING 
typeEffect.textContent = ''

// TYPE FUNCTION
function type() {
    textLength++
    const textArray = text.split(' ')
    console.log(textArray)
    typeEffect.textContent = text.substring(0, textLength)
    if (textLength >= text.length) {
    clearInterval(interval)
}}

// ONLOAD
document.addEventListener('DOMContentLoaded', () => {
    interval = setInterval(type, 32)
})