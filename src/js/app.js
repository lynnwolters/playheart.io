import { Page } from './page' // variable importeren
import { Router } from './router' // variable importeren

export class App { // niewe class aanmaken genaamd app + exportoren om in de main te gebruiken
    constructor () {
        this.init() // init method aanroepen zodat die als eerst wordt gelezen
    }

    init = () => {
        this.router = new Router() // nieuwe versie van router class aanmaken en in variable stoppen
        this.page = new Page() // nieuwe versie van page class aanmaken en in variable stoppen
    }

    handleContentReplaced = () => { // handle content replaced method definieren
        this.page.destroy() // roep destroy method aan als de content gereplaced is
        this.page = new Page() // maak nieuwe pagina aan als content gereplaced is
    }
}