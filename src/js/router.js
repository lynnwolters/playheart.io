import Swup from 'swup'
import { app } from '../main'

export class Router {
    constructor () {
        this.swup = new Swup({}) 
        this.init()
    }
    
    init = () => { 
        this.bindEvents() 
    }

    bindEvents = () => { 
        this.swup.on('contentReplaced', this.contentReplaced) 
    }

    contentReplaced = () => { 
        app.handleContentReplaced() 
    }
}