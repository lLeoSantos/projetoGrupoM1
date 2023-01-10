let menu = false

const menuToggle = document.querySelector('.menuToggle')

let mudaMenu = function() {
    console.log(menu);
    document.body.style.overflow = menu ? 'initial' : 'hidden'

    menuToggle.classList.toggle('on')
    menu = !menu
}