import Swup from "swup";
import { app } from "../main";

export class Router {
    constructor () {
        this.init()
    }
    
    init = () => {
        this.swup = new Swup({})
        this.bindEvents()
    }

    bindEvents = () => {
        this.swup.on('contentReplaced', this.contentReplaced)
    }

    contentReplaced = () => {
        app.handleContentReplaced()
    }
}