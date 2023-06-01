import { Page } from './page' 
import { Router } from './router' 

export class App { 
    constructor () {
        this.router = new Router() 
        this.page = new Page() 
        this.init() 
    }

    init = () => {
        this.handleContentReplaced()
    }

    handleContentReplaced = () => { 
        this.page.destroy() 
        this.page = new Page() 
    }
}