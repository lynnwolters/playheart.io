import './style.scss'
import './styles/cursor.scss'
import './styles/marquee.scss'
import './styles/mobile-menu.scss'
import './styles/underline-hover.scss'
import './styles/submenu.scss'
import './styles/swup.scss'

import './js/cursor.js'
import { initTypeEffect } from './js/type-effect'

import { App } from './js/app'

export let app = null

function initApp() {
    // initCursor()
    app = new App()
}

document.addEventListener('DOMContentLoaded', () => {
    initApp()
})