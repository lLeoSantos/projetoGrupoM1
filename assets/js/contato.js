// Declaração de variáveis com os inputs do código
const inputNome = window.document.querySelector('#nome')
const inputSobrenome = window.document.querySelector('#sobrenome')
const inputEmail = window.document.querySelector('#email')
const inputTel = window.document.querySelector('#telefone')
const inputMensagem = window.document.querySelector('#mensagem')

// Declaração de RegEx utilizados
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
const regexTel = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

// Array do formulário, com todos os campos presentes no form
const formContato = [inputNome, inputSobrenome, inputEmail, inputTel, inputMensagem]

// Função para adicionar uma classe
function adicioneClasse(campo, nomedaClasse) {
    const containerDoCampo = campo.parentElement

    containerDoCampo.classList.add(nomedaClasse)
}

// Função para remover uma classe
function removaClasse(campo, nomedaClasse) {
    const containerDoCampo = campo.parentElement

    containerDoCampo.classList.remove(nomedaClasse)
}

// Função para verificar se há somente números
function somenteNumeros() {
    if (isNaN(Number(inputTel.value))) {
        adicioneClasse(inputTel, 'soNumeros')
    }
    else if (!isNaN(Number(inputTel.value))) {
        removaClasse(inputTel, 'soNumeros')
    }
}
// Função que verifica se o campo de telefone está completo
function completeCampo() {
    if (inputTel.value.length < 10) {
        adicioneClasse(inputTel,'requerido')
    }
    else if (inputTel.value.length >= 10) {
        removaClasse(inputTel, 'requerido')
    }
}

// Função que verifica se o e-mail é válido
function checarEmail(){
    if(inputEmail.value.length != 0 &&  !regexEmail.test(inputEmail.value)) {
            adicioneClasse(inputEmail, 'emailInvalido')
        }
    else if(inputEmail.value.length != 0 && regexEmail.test(inputEmail.value) ) {
       removaClasse(inputEmail, 'emailInvalido')
   }
}

// Função que verifica todos campos vazios ao tentar enviar o form
function verificarCampos() {
    let camposVazios = false
    for (let campo of formContato) {
        if (campo.value.length == 0 || campo.parentElement.classList.contains('requerido') || campo.parentElement.classList.contains('soNumeros') || campo.parentElement.classList.contains('emailInvalido')) {
            camposVazios = true
            requerido(campo)
        }
        
    }
    if (camposVazios == true) {
        somenteNumeros()
        checarEmail()
        alert('Existem campos a serem preenchidos ou com dados inválidos. Confirme se todos os dados foram preenchidos corretamente e tente novamente.')
    }

}

// Função que verifica se algum campo não foi preenchido
function requerido(eve) {
    if (eve.value.length == 0) {
        adicioneClasse(eve,'requerido')
    }
    else if (eve.value.length > 0) {
        removaClasse(eve, 'requerido')
    }

    if (eve == inputTel) {
        completeCampo()
    }
}

// Laço de repetição para adicionar um evento para cada campo
formContato.forEach(element => {
    element.addEventListener('blur', function(event) {requerido(event.target)})
});

