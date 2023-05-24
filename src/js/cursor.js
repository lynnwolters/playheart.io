// VARIABLES
const cursorOutside = document.querySelector('.js-cursor-outside')
const cursorOutsideDetail = document.querySelector('.js-cursor-outside-detail')
const heart = document.querySelector('.js-heart')
const heartRects = document.querySelectorAll('.js-heart-rect')
const cursorInside = document.querySelector('.js-cursor-inside')
const marqueeWrapper = document.querySelector('.js-marquee-wrapper')
const chapterDescription = document.querySelector('.js-chapter-wrapper')
const marqueeTitleEls = document.querySelectorAll('.js-marquee-title-el')
const heartRectToneOfVoice = document.querySelector('.js-heart-rect-tone-of-voice')
const heartRectBrandStory = document.querySelector('.js-heart-rect-brand-story')
const heartRectVisualIdentity = document.querySelector('.js-heart-rect-visual-identity')
const heartRectCompetitors = document.querySelector('.js-heart-rect-competitors')
const heartRectBrandConcept = document.querySelector('.js-heart-rect-brand-concept')
const heartRectInspiration = document.querySelector('.js-heart-rect-inspiration')
const heartRectAudiences = document.querySelector('.js-heart-rect-audiences')
const heartRectGoals = document.querySelector('.js-heart-rect-goals')

// GIVING VALUE TO VARIABLES
let heartRect = heart.getBoundingClientRect()
let isInHeartRects = false
let isOnHeartRectGoals = false
let centerX = 0
let centerY = 0
let marqueeTitle = ''

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

// CUSTOM CURSOR HOVER FUNCTION
heartRects.forEach(item => {
    item.addEventListener('mouseenter', () => {
        let marqueeTitle = ''
        if (item === heartRectGoals) {
            marqueeTitle = 'Goals'
        }
        if (item === heartRectAudiences) {
            marqueeTitle = 'Audiences'
        }
        if (item === heartRectInspiration) {
            marqueeTitle = 'Inspiration'
        }
        if (item === heartRectBrandConcept) {
            marqueeTitle = 'Brand Concept'
        }
        if (item === heartRectCompetitors) {
            marqueeTitle = 'Competitors'
        }
        if (item === heartRectVisualIdentity) {
            marqueeTitle = 'Visual Identity'
        }
        if (item === heartRectBrandStory) {
            marqueeTitle = 'Brand Story'
        }
        if (item === heartRectToneOfVoice) {
            marqueeTitle = 'Tone Of Voice'
        }
        marqueeTitleEls.forEach(el => {
            el.textContent = marqueeTitle
        })
        marqueeWrapper.style.display = 'flex'
        chapterDescription.style.display = 'flex'
        cursorOutside.classList.add('ll-cursor-grow')
    })

    item.addEventListener('mouseleave', () => {
        marqueeWrapper.style.display = 'none'
        chapterDescription.style.display = 'none'
        cursorOutside.classList.remove('ll-cursor-grow')
    })
})




























