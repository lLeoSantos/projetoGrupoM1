let cont = 1
const slide = document.querySelectorAll('.containerCarrossel img')
console.log(slide);
setInterval(function(){

    document.getElementById('slide' + cont).checked = true

    cont++

    if (cont > slide.length) {
    cont = 1
    }
}, 3000)