import './style.scss'
import './styles/cursor.scss'
import './styles/marquee.scss'
import './styles/underline-hover.scss'
import './styles/submenu.scss'
import './styles/swup.scss'

import { App } from './js/app' 
import { TypeEffect } from './js/logic/type-effect' 

export let app = null 

function initApp() { 
    app = new App() 
}

document.addEventListener('DOMContentLoaded', () => { 
    initApp() 
    new TypeEffect() 
})