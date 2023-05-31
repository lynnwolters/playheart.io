import './style.scss'
import './styles/cursor.scss'
import './styles/marquee.scss'
import './styles/mobile-menu.scss'
import './styles/underline-hover.scss'
import './styles/submenu.scss'
import './styles/swup.scss'

import { App } from './js/app' // import app class uit ander js file

export let app = null // nieuwe app variable die standaard op ongedefinieerd staat

function initApp() { // init app functie definieren en daarin een nieuwe versie van app class aanmaken en toevoegn aan de app variable
    app = new App() 
}

document.addEventListener('DOMContentLoaded', () => { // init app functie van hierboven aanroepen als de website is geladen of herladen
    initApp() 
})