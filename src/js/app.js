import { Cursor } from './logic/cursor'
import { Page } from './page' 
import { Router } from './router' 

export class App { 
    constructor () {
        this.init() 
    }
    
    init = () => {
        this.router = new Router()
        this.cursor = new Cursor()
    }
    
    handleContentReplaced = () => { 
        this.createPage()
    }
    
    createPage = (firstTime = false) => {
        if (this.page) {
            this.page.destroy() 
        }
        this.page = new Page(firstTime) 
    }
}