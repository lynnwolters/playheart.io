// export class ChapterDescription {
//     constructor() {
//         this.chapterDescriptionWrapper = document.querySelector('.js-chapter-description-wrapper')
//         if (!this.descriptionWrapper) {
//             return false
//         }
//         this.chapterDescriptionTextElements = document.querySelector('.js-chapter-description-text-element')
//         this.heartRectGoals = document.querySelector('.js-heart-rectangle-goals')
//         this.heartRectAudiences = document.querySelector('.js-heart-rectangle-audiences')
//         this.init()
//     }

//     init = () => {}

//     showChapterDescription = (rectangle) => {
//         let chapterDescriptionText = ''
//         if (rectangle === this.heartRectGoals) {
//             chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
//             console.log('Hello')
//         }
//         if (rectangle === this.heartRectAudiences) {
//             chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
//         }
//         this.chapterDescriptionTextElements.forEach(el => {
//             el.textContent = chapterDescriptionText
//         })
//         this.chapterDescriptionWrapper.style.display = 'flex'
//     }

//     hideChapterDescription = () => {
//         this.chapterDescriptionWrapper.style.display = 'none'
//     }
// }