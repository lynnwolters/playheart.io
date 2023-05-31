export class Page {
    constructor () {
        this.title = document.title
        console.log('initPage: ', this.title)

        this.init()
    }

    init = () => {
        this.hamburgerMenu = new HamburgerMenu()
        // this.navigation = new Navigation()
        // this.cursor = new Cursor()
    }

    destroy = () => {
        console.log('destroy page', this.title)
    }
}