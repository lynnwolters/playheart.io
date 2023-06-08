import './style.scss'
import './styles/cursor-grow.scss'
import './styles/marquee.scss'
import './styles/underline-hover.scss'
import './styles/submenu.scss'
import './styles/swup.scss'
import './styles/type-effect.scss'

import { App } from './js/app' 

export let app = null 

function initApp() { 
    app = new App() 
}

document.addEventListener('DOMContentLoaded', () => { 
    initApp() 
})