export class Cursor {
    constructor() {
        this.init()
    }

    init = () => {
        
    }
}

// const cursorOutside = document.querySelector('.js-cursor-outside')
// const heart = document.querySelector('.js-heart')
// const heartRects = document.querySelectorAll('.js-heart-rect')
// const cursorInside = document.querySelector('.js-cursor-inside')
// const marqueeWrapper = document.querySelector('.js-marquee-wrapper')
// const chapterDescription = document.querySelector('.js-chapter-wrapper')
// const marqueeTitleEls = document.querySelectorAll('.js-marquee-title-el')
// const chapterDescriptionTextEls = document.querySelectorAll('.js-chapter-description-text-el')
// const heartRectToneOfVoice = document.querySelector('.js-heart-rect-tone-of-voice')
// const heartRectBrandStory = document.querySelector('.js-heart-rect-brand-story')
// const heartRectVisualIdentity = document.querySelector('.js-heart-rect-visual-identity')
// const heartRectCompetitors = document.querySelector('.js-heart-rect-competitors')
// const heartRectBrandConcept = document.querySelector('.js-heart-rect-brand-concept')
// const heartRectInspiration = document.querySelector('.js-heart-rect-inspiration')
// const heartRectAudiences = document.querySelector('.js-heart-rect-audiences')
// const heartRectGoals = document.querySelector('.js-heart-rect-goals')
// const a = document.querySelectorAll('a');
// const button = document.querySelectorAll('button');

// let heartRect = heart.getBoundingClientRect()
// let isInHeartRects = false
// let isOnHeartRectGoals = false
// let centerX = 0
// let centerY = 0

// function reportWindowSize() {
//     let windowHeight = window.innerHeight
//     let windowWidth = window.innerWidth
//     heartRect = heart.getBoundingClientRect()
//     console.log(`Heart top: ${heartRect.top}`, `Heart left: ${heartRect.left}`)
//     console.log(`Window hoogte: ${windowHeight}`, `Window breedte: ${windowWidth}`)
// }

// window.addEventListener('resize', reportWindowSize)

// function customCursorAak(event) {
//     console.log({ clientX, clientY, target })
// }

// function customCursor({ clientX, clientY, target }) {
//     heartRects.forEach(rectElement => {
//         rectElement.addEventListener('mouseenter', () => {
//             isInHeartRects = true
//             const rect = rectElement.getBoundingClientRect()
//             centerX = rect.left + rect.width / 2
//             centerY = rect.top + rect.height / 2
//             console.log('from cursor outside:', centerX, centerY)
//             cursorOutside.style.transform = `translate3d(calc(${centerX}px - 50%), calc(${centerY}px - 50%), 0)`
//         })
//         rectElement.addEventListener('mouseleave', () => {
//             isInHeartRects = false
//         })
//     })

//     if (!isInHeartRects) {
//         cursorOutside.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
//     }
    
//     if (target.closest('.js-heart')) {
//         cursorInside.style.opacity = 1
//         // console.log('from cursor inside:', heartRect.left, heartRect.top)
//         cursorInside.style.transform = `translate3d(calc(${clientX - heartRect.left}px), calc(${clientY - heartRect.top}px), 0)`
//     } else {
//         cursorInside.style.opacity = 0
//     }
// }

// // document.addEventListener('mousemove', customCursor)
// document.addEventListener('mousemove', customCursorAak)

// heartRects.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         let marqueeTitle = ''
//         let chapterDescriptionText = ''
//         if (item === heartRectGoals) {
//             marqueeTitle = 'Goals'
//             chapterDescriptionText = 'In this chapter you will find the goals that we have set up with Tree by Tree.'
//         }
//         if (item === heartRectAudiences) {
//             marqueeTitle = 'Audiences'
//             chapterDescriptionText = 'Here you will find everything about the target group of Tree by Tree.'
//         }
//         if (item === heartRectInspiration) {
//             marqueeTitle = 'Inspiration'
//             chapterDescriptionText = 'In this chapter you will find the inspiration that led us to the branding of Tree by Tree.'
//         }
//         if (item === heartRectBrandConcept) {
//             marqueeTitle = 'Brand Concept'
//             chapterDescriptionText = 'Read how we visualized Tree by Tree\'s brand story.'
//         }
//         if (item === heartRectCompetitors) {
//             marqueeTitle = 'Competitors'
//             chapterDescriptionText = 'Read about the competitors of Tree by Tree.'
//         }
//         if (item === heartRectVisualIdentity) {
//             marqueeTitle = 'Visual Identity'
//             chapterDescriptionText = 'Here you can find everything about the visual identity of Tree by Tree.'
//         }
//         if (item === heartRectBrandStory) {
//             marqueeTitle = 'Brand Story'
//             chapterDescriptionText = 'In this chapter you will read the brand story of Tree by Tree.'
//         }
//         if (item === heartRectToneOfVoice) {
//             marqueeTitle = 'Tone Of Voice'
//             chapterDescriptionText = 'This chapter explains how Tree by Tree is communicating with their customers.'
//         }
//         marqueeTitleEls.forEach(el => {
//             el.textContent = marqueeTitle
//         })
//         chapterDescriptionTextEls.forEach(el => {
//             el.textContent = chapterDescriptionText
//         })
//         marqueeWrapper.style.display = 'flex'
//         cursorOutside.classList.add('ll-cursor-grow')
//         chapterDescription.classList.add('ll-fade-in')
//     })

//     item.addEventListener('mouseleave', () => {
//         marqueeWrapper.style.display = 'none'
//         cursorOutside.classList.remove('ll-cursor-grow')
//         chapterDescription.classList.remove('ll-fade-in')
//     })
// })

// a.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         cursorOutside.classList.add('ll-cursor-grow')
//     })
//     item.addEventListener('mouseleave', () => {
//         cursorOutside.classList.remove('ll-cursor-grow')
//     })
// })

// button.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         cursorOutside.classList.add('ll-cursor-grow')
//     })
//     item.addEventListener('mouseleave', () => {
//         cursorOutside.classList.remove('ll-cursor-grow')
//     })
// })




























