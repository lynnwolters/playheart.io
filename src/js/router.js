import Swup from 'swup' // swup importeren
import { app } from '../main' // app variable waar nieuwe versie van app class in zit importeren

export class Router { // niewe class aanmaken genaamd router + exporteren 
    constructor () {
        this.init() // init method aanroepen zodat die als eerst wordt gelezen
    }
    
    init = () => { 
        this.swup = new Swup({}) // nieuwe swup aanmaken en opslaan in een nieuwe variable
        this.bindEvents() // bind events method aanroepen
    }

    bindEvents = () => { // bind events functie definieren
        this.swup.on('contentReplaced', this.contentReplaced) 
    }

    contentReplaced = () => { // content replaced method definieren
        app.handleContentReplaced() // roep handle content replaced aan op app
    }
}