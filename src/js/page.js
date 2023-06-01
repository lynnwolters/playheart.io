import { HamburgerMenu } from './logic/hamburger-menu.js'
import { Navigation } from './logic/navigation.js'
import { Cursor } from './logic/cursor.js' 
import { Marquee } from './logic/marquee.js'

export let marquee 

export class Page { 
    constructor () {
        this.title = document.title 
        this.init() 
    }

    init = () => { 
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigation = new Navigation()
        this.getPageTitle()
        marquee = new Marquee() // instance wordt in variable gestopt (krijgt alle info van bijhorende class mee)
        this.cursor = new Cursor()
    }

    getPageTitle = () => {
        console.log('initPage: ', this.title) 
    }

    destroy = () => { 
        console.log('destroy page', this.title) 
    }
}