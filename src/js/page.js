import { HamburgerMenu } from './logic/hamburger-menu.js'
import { Navigation } from './logic/navigation.js'
import { TypeEffect } from './logic/type-effect.js'
import { Cursor } from './logic/cursor.js'
import { Heart } from './logic/heart.js'
import { Marquee } from './logic/marquee.js'

export class Page { // maak een page class aan en exporteer de class
    constructor () {
        this.title = document.title // titel van pagina in variable stoppen
        console.log('initPage: ', this.title) // log title van pagina 
        this.init() // init method aanroepen zodat die als eerst wordt gelezen
    }

    init = () => { // nieuwe classes aanmaken voor functies die op website nodig zijn + in variable stoppen
        this.hamburgerMenu = new HamburgerMenu() 
        this.navigation = new Navigation() 
        this.typeEffect = new TypeEffect() 
        this.cursor = new Cursor() 
        this.heart = new Heart() 
        this.marquee = new Marquee() 
    }

    destroy = () => { // destroy method definieren
        console.log('destroy page', this.title) // log destroy pagina en titel van de pagina die verwijderd wordt
    }
}