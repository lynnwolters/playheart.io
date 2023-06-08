import './style.scss'
import './styles/cursor-grow.scss'
import './styles/marquee.scss'
import './styles/underline-hover.scss'
import './styles/navigation.scss'
import './styles/swup.scss'
import './styles/type-effect.scss'
import './styles/loading-screen.scss'

import { App } from './js/app' 
import { LoadingScreen } from './js/logic/loading-screen'

export let app = null 

function initApp() { 
    app = new App() 
}

document.addEventListener('DOMContentLoaded', () => { 
    new LoadingScreen()
    initApp()
})