import './style.scss'
import './styles/cursor.scss'
import './styles/marquee.scss'
import './styles/mobile-menu.scss'
import './styles/underline-hover.scss'
import './styles/submenu.scss'
import './styles/swup.scss'

import './js/cursor.js'
import { initTypeEffect } from './js/type-effect'

import Swup from 'swup'

const swup = new Swup({

})

swup.on('contentReplaced', () => {
    initPage()
})


function initApp() {
    console.log('initApp')
    // initCursor()
    initPage()
}

function initPage() {
    console.log('initPage')
    initTypeEffect()
}

document.addEventListener('DOMContentLoaded', () => {
    initApp()
})