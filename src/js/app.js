import { Page } from './page' 
import { Router } from './router' 

export class App { 
    constructor () {
        this.init() 
    }

    init = () => {
        this.router = new Router() 
        this.page = new Page() 
    }

    handleContentReplaced = () => { 
        this.page.destroy() 
        this.page = new Page() 
    }
}