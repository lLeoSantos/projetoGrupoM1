let inputNome = window.document.querySelector('#nome')

console.log(inputNome.value.length)
function verificarCampos() {
    if (inputNome.value.length() == 0) {
        alert('Campo requerido')
    }
}