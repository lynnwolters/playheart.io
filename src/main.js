import './style.scss'
import './styles/cursor.scss'
import './styles/marquee.scss'
import './styles/mobile-menu.scss'
import './styles/underline-hover.scss'
import './styles/submenu.scss'
import './styles/swup.scss'

import './js/cursor.js'
import './js/type-effect.js'
import { subMenuScroll } from './js/submenu.js'
import { initTypeEffect } from './js/type-effect.js'

import Swup from 'swup'

const swup = new Swup ({
    
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContent completed!')
    subMenuScroll() 
    initTypeEffect()
})

swup.on('contentReplaced', () => {
    console.log('Reload completed!')
    subMenuScroll()
    initTypeEffect()
})





