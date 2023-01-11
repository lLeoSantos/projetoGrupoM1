const inputNome = window.document.querySelector('#nome')
const inputSobrenome = window.document.querySelector('#sobrenome')
const inputEmail = window.document.querySelector('#email')
const inputTel = window.document.querySelector('#telefone')
const inputMensagem = window.document.querySelector('#mensagem')
// 
const formContato = [inputNome, inputSobrenome, inputEmail, inputTel, inputMensagem]

function somenteNumeros() {
    if (isNaN(Number(inputTel.value))) {
        inputTel.parentElement.classList.add('soNumeros')
    }
    else if (!isNaN(Number(inputTel.value))) {
        inputTel.parentElement.classList.remove('soNumeros')
    }
}

function completeCampo() {
    if (inputTel.value.length < 10) {
        inputTel.parentElement.classList.add('requerido')
    }
    else if (inputTel.value.length >= 10) {
        inputTel.parentElement.classList.remove('requerido')
    }
}

function checarEmail(){
    if(inputEmail.value.length != 0 && inputEmail.value.indexOf('@') == -1 
         || inputEmail.value.length != 0 && inputEmail.value.indexOf('.') == -1 ) {
            inputEmail.parentElement.classList.add('emailInvalido')
        }
    else if(inputEmail.value.length != 0 && inputEmail.value.indexOf('@') != -1 
    || inputEmail.value.length != 0 && inputEmail.value.indexOf('.') != -1 ) {
       inputEmail.parentElement.classList.remove('emailInvalido')
   }
}

function verificarCampos() {
    let camposVazios = false
    for (let campo of formContato) {
        if (campo.value.length == 0 || campo.parentElement.classList.contains('requerido') || campo.parentElement.classList.contains('soNumeros') || campo.parentElement.classList.contains('emailInvalido')) {
            camposVazios = true
            campo.parentElement.classList.add('requerido')
        }
        
    }
    if (camposVazios == true) {
        alert('Existem campos a serem preenchidos. Confirme se todos os dados foram preenchidos e tente novamente.')
    }

    somenteNumeros()
    checarEmail()
}

function requerido(eve) {
    if (eve.target.value.length == 0) {
        eve.target.parentElement.classList.add('requerido')
    }
    else if (eve.target.value.length > 0) {
        eve.target.parentElement.classList.remove('requerido')
    }

    if (eve.target == inputTel) {
        completeCampo()
    }
}

formContato.forEach(element => {
    element.addEventListener('blur', requerido)
});

