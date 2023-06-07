import { HamburgerMenu } from './logic/hamburger-menu.js'
import { Navigation } from './logic/navigation.js'
import { Cursor } from './logic/cursor.js' 
import { Marquee } from './logic/marquee.js'
import { Heart } from './logic/heart.js'
import { TypeEffect } from './logic/type-effect.js'
// import { ChapterDescription } from './logic/chapter-description.js'

export class Page { 
    constructor () {
        this.title = document.title 
        this.init() 
    }

    init = () => { 
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigation = new Navigation()
        this.getPageTitle()
        this.marquee = new Marquee()
        // this.chapterDescription = new ChapterDescription()
        this.cursor = new Cursor()
        this.heart = new Heart()
        this.typeEffect = new TypeEffect()
    }

    getPageTitle = () => {
        console.log('initPage: ', this.title) 
    }

    destroy = () => { 
        console.log('destroy page', this.title) 
    }
}