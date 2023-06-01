import { HamburgerMenu } from './logic/hamburger-menu.js'
import { Navigation } from './logic/navigation.js'
import { Cursor } from './logic/cursor.js' 

export class Page { 
    constructor () {
        this.title = document.title 
        this.init() 
    }

    init = () => { 
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigation = new Navigation()
        this.getPageTitle()
        this.cursor = new Cursor()
    }

    getPageTitle = () => {
        console.log('initPage: ', this.title) 
    }

    destroy = () => { 
        console.log('destroy page', this.title) 
    }
}