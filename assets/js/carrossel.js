let cont = 1
const slide = document.querySelectorAll('.containerCarrossel img')
setInterval(function(){

    document.querySelector('#slide' + cont).checked = true

    cont++

    if (cont > slide.length) {
    cont = 1
    }
}, 3000)