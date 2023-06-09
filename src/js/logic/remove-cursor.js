import { app } from "../../main"

export class RemoveCursor {
    constructor() {
        this.removeCursorSelector = document.querySelectorAll('.js-remove-cursor')
        if (!this.removeCursorSelector) {
            return false
        }
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.removeCursorSelector.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.removeCursor()
            })
            item.addEventListener('mouseleave', () => {
                this.addCursor()
            })
        })
    }

    removeCursor = () => {
        app.cursor.removeCursor()
    }

    addCursor = () => {
        app.cursor.addCursor()
    }
}