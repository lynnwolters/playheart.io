import { HamburgerMenu } from './logic/hamburger-menu.js'
import { Navigation } from './logic/navigation.js'
import { TypeEffect } from './logic/type-effect.js'
// import { Cursor } from './logic/cursor.js'
// import { Heart } from './logic/heart.js'
// import { Marquee } from './logic/marquee.js'

export class Page { 
    constructor () {
        this.title = document.title 
        console.log('initPage: ', this.title) 
        this.init() 
    }

    init = () => { 
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigation = new Navigation() 
        this.typeEffect = new TypeEffect() 
        // this.cursor = new Cursor() 
        // this.heart = new Heart() 
        // this.marquee = new Marquee() 
    }

    destroy = () => { 
        console.log('destroy page', this.title) 
    }
}