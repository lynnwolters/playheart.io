import { HamburgerMenu } from './logic/hamburger-menu.js'
import { NavigationScroll } from './logic/navigation-scroll.js'
import { Cursor } from './logic/cursor.js' 
import { Marquee } from './logic/marquee.js'
import { Heart } from './logic/heart.js'
import { TypeEffect } from './logic/type-effect.js'
import { RemoveCursor } from './logic/remove-cursor.js'
import { app } from '../main.js'

export class Page { 
    constructor (firstTime) {
        this.title = document.title 
        this.init(firstTime)
        console.log('initPage')
    }

    init = (firstTime) => {
        if (!firstTime) {
            app.cursor.handleRouteChange()
        }
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigationScroll = new NavigationScroll()
        this.getPageTitle()
        this.marquee = new Marquee()
        this.heart = new Heart()
        // this.removeCursor = new RemoveCursor()
        if (document.querySelector('.js-type-effect')) {
            this.typeEffect = new TypeEffect(undefined, {
                callback: () => {
                    app.cursor.update = true
                }
            })
        } else {
            app.cursor.update = true
        }
    }

    getPageTitle = () => {
        console.log('initPage: ', this.title) 
    }

    destroy = () => { 
        console.log('destroy page', this.title) 
    }
}