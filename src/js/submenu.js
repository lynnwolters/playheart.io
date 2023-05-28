function subMenuScroll() { // functie
    const scrollPosition = window.scrollY // verticale scroll positie achterhalen van window
    document.querySelectorAll('.js-sub-menu li').forEach(item => { // loop over elk li element
        const sectionId = item.firstElementChild.getAttribute('href') // ga opzoek naar het eerste href element die je kan vinden
        const section = document.querySelector(sectionId) // section = sectionId (eerste href element die die kan vinden)
        if (section) { // als section is gevonden
            const sectionTop = section.offsetTop // pak section top
            const sectionBottom = sectionTop + section.offsetHeight // bereken hoogte section
            item.classList.toggle('active', scrollPosition >= sectionTop && scrollPosition < sectionBottom) // toggle active als je je in een sectie bevindt
        }
    })
}

window.addEventListener('scroll', subMenuScroll)

