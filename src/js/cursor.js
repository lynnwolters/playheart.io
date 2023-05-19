// VARIABLES
const cursorOutside = document.querySelector('.js-cursor-outside')
const heart = document.querySelector('.js-heart')
const heartRects = document.querySelectorAll('.js-heart-rect')
const cursorInside = document.querySelector('.js-cursor-inside')
const marquee = document.querySelector('.js-marquee-wrapper')
const chapterDescription = document.querySelector('.js-chapter-wrapper')

// GIVING VALUE TO VARIABLES
let heartRect = heart.getBoundingClientRect()
let isInHeartRects = false
let centerX = 0
let centerY = 0

// RESIZE HEART FUNCTION
function reportWindowSize() {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    heartRect = heart.getBoundingClientRect()
    console.log(`Window hoogte: ${windowHeight}`, `Window breedte: ${windowWidth}`)
}

window.addEventListener('resize', reportWindowSize)

// CUSTOM CURSOR FUNCTION
function customCursor({ clientX, clientY, target }) {
    heartRects.forEach(rectElement => {
        rectElement.addEventListener('mouseenter', () => {
            isInHeartRects = true
            const rect = rectElement.getBoundingClientRect()
            centerX = rect.left + rect.width / 2
            centerY = rect.top + rect.height / 2
            cursorOutside.style.transform = `translate3d(calc(${centerX}px - 50%), calc(${centerY}px - 50%), 0)`
        })
        rectElement.addEventListener('mouseleave', () => {
            isInHeartRects = false
        })
    })

    if (!isInHeartRects) {
        console.log('out')
        cursorOutside.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
    }
    
    if (target.closest('.js-heart')) {
        cursorInside.style.opacity = 1
        cursorInside.style.transform = `translate3d(calc(${clientX - heartRect.left}px), calc(${clientY - heartRect.top}px), 0)`
    } else {
        cursorInside.style.opacity = 0
    }
}

document.addEventListener('mousemove', customCursor)

// CUSTOMC CURSOR HOVER FUNCTION
heartRects.forEach(item => {
    item.addEventListener('mouseenter', () => {
        marquee.style.display = 'flex'
        chapterDescription.style.display = 'flex'
        cursorOutside.classList.add('ll-cursor-grow')
    })
    item.addEventListener('mouseleave', () => {
        marquee.style.display = 'none'
        chapterDescription.style.display = 'none'
        cursorOutside.classList.remove('ll-cursor-grow')
    })
})



























