export class Marquee {
    constructor() {
        this.marqueeWrapper = document.querySelector('.js-marquee-wrapper')
        if (!this.marqueeWrapper) {
            return false
        }
        this.descriptionWrapper = document.querySelector('.js-description-wrapper')
        this.heartRectangleGoals = document.querySelector('.js-heart-rectangle-goals')
        this.heartRectangleAudiences = document.querySelector('.js-heart-rectangle-audiences')
        this.heartRectangleInspiration = document.querySelector('.js-heart-rectangle-inspiration')
        this.heartRectangleBrandConcept = document.querySelector('.js-heart-rectangle-brand-concept')
        this.heartRectangleCompetitors = document.querySelector('.js-heart-rectangle-competitors')
        this.heartRectangleVisualIdentity = document.querySelector('.js-heart-rectangle-visual-identity')
        this.heartRectangleBrandStory = document.querySelector('.js-heart-rectangle-brand-story')
        this.heartRectangleToneOfVoice = document.querySelector('.js-heart-rectangle-tone-of-voice')
        this.marqueeTextElements = document.querySelectorAll('.js-marquee-text-element')
        this.descriptionTextElements = document.querySelectorAll('.js-description-text-element')
        this.init()
    }

    init = () => {}

    showMarquee = (rectangle) => {
        let marqueeText = ''
        let descriptionText = ''
        if (rectangle === this.heartRectangleGoals) {
            marqueeText = 'Goals'
            descriptionText = 'In this chapter you will find the goals that we have set up with Tree by Tree.'
        }
        if (rectangle === this.heartRectangleAudiences) {
            marqueeText = 'Audiences'
            descriptionText = 'Here you will find everything about the target group of Tree by Tree.'
        }
        if (rectangle === this.heartRectangleInspiration) {
            marqueeText = 'Inspiration'
            descriptionText = 'In this chapter you will find the inspiration that led us to the branding of Tree by Tree.'
        }
        if (rectangle === this.heartRectangleBrandConcept) {
            marqueeText = 'Brand Concept'
            descriptionText = 'Read how we visualized Tree by Tree\'s brand story.'
        }
        if (rectangle === this.heartRectangleCompetitors) {
            marqueeText = 'Competitors'
            descriptionText = 'Read about the competitors of Tree by Tree.'
        }
        if (rectangle === this.heartRectangleVisualIdentity) {
            marqueeText = 'Visual Identity'
            descriptionText = 'Here you can find everything about the visual identity of Tree by Tree.'
        }
        if (rectangle === this.heartRectangleBrandStory) {
            marqueeText = 'Brand Story'
            descriptionText = 'In this chapter you will read the brand story of Tree by Tree.'
        }
        if (rectangle === this.heartRectangleToneOfVoice) {
            marqueeText = 'Tone Of Voice'
            descriptionText = 'This chapter explains how Tree by Tree is communicating with their customers.'
        }
        this.marqueeTextElements.forEach(el => {
            el.textContent = marqueeText
        })
        this.descriptionTextElements.forEach(el => {
            el.textContent = descriptionText
        })
        this.marqueeWrapper.style.display = 'flex'
        this.descriptionWrapper.classList.add('ll-description-fade-in')
    }

    hideMarquee = () => {
        this.marqueeWrapper.style.display = 'none'
        this.descriptionWrapper.classList.remove('ll-description-fade-in')
    }
}




