// Definindo um contador
let cont = 1

// Adicionando as imagens para manipulaçao via js 
const slide = document.querySelectorAll('.containerCarrossel img')

// Utilizando a funcção 'setInterval' para especificar o intervalo
// de tempo entre as execuções da função
setInterval(function(){
    
    // Adicionando ao input da imagem correspondente na tela um 'cheked' para que
    // ela seja mostrada no espaço visível do carrossel
    document.querySelector('#slide' + cont).checked = true

    // Adicionando sempre + 1 à variável cont 
    cont++

    // Utilizando uma condicional para sempre verificar se o contator
    // superou a quantidade de imagens
    if (cont > slide.length) {
        
        // Sempre que o contador superar o número de imagem 
        // ele volta a valer 1
        cont = 1
    }
}, 3000)