import { HamburgerMenu } from './logic/hamburger-menu.js'
import { NavigationScroll } from './logic/navigation-scroll.js'
import { Cursor } from './logic/cursor.js' 
import { Marquee } from './logic/marquee.js'
import { Heart } from './logic/heart.js'
import { TypeEffect } from './logic/type-effect.js'
import { RemoveCursor } from './logic/remove-cursor.js'

export class Page { 
    constructor () {
        this.title = document.title 
        this.init() 
    }

    init = () => { 
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigationScroll = new NavigationScroll()
        this.getPageTitle()
        this.marquee = new Marquee()
        this.cursor = new Cursor()
        this.heart = new Heart()
        this.typeEffect = new TypeEffect()
        this.removeCursor = new RemoveCursor()
    }

    getPageTitle = () => {
        console.log('initPage: ', this.title) 
    }

    destroy = () => { 
        console.log('destroy page', this.title) 
    }
}