// Defininindo o menu como fechado
let menu = false

// Aqui estou pegando a div pai de todo o menu para configurar como 'on' 
const menuToggle = document.querySelector('.menuToggle')


function mudaMenu() {
    
    // Aqui temos um operador ternário para verificar se o menu está mudando de 
    // fechado (false) para aberto (true). Se estiver fecahdo ira fixar a tela 
    // caso contrário, irá deixar a rolagem da tela liberada
    document.body.style.overflow = menu ? 'initial' : 'hidden'

    // Utilizando o 'classList' para modificar a clase da div 
    // e o 'toggle' para adicionar ou remover a nova clase 'on'
    menuToggle.classList.toggle('on')

    // Colocando na variavel menu o inverso do que ela tinha antes 
    // se menu estiver com 'true' ele irá receber 'false'
    menu = !menu
}