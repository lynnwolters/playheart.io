import { TypeEffect } from "./type-effect"

export class LoadingScreen {
    constructor() {
        this.loadingScreen = document.querySelector('.js-loading-screen')
        if (!this.loadingScreen) {
            return false
        }
        this.loadingScreenTypeEffect = new TypeEffect('.js-loading-screen-type-effect', {
            callback: () => this.removeLoadingScreen()
        })
        this.init()
    }

    init = () => {}

    removeLoadingScreen = () => {
        this.loadingScreen.classList.add('ll-loading-screen-fade-out')
    }
}