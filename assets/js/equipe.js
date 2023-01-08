const botoes = document.querySelectorAll('[data-abre-modal]')
for (let botaoE1 of botoes){
	botaoE1.addEventListener('click', abreModal);
}

function abreModal(e) {
	const botaoClicadoE1 = e.currentTarget;
	const seletorDoModal = botaoClicadoE1.dataset.abreModal;
	const modalE1 = document.querySelector(seletorDoModal);
	modalE1.classList.add('visivel');
}

const botoesDeFechar = document.querySelectorAll('.fechar-modal');
botoesDeFechar.forEach(fechaE1 => fechaE1.addEventListener('click',fechaModal));

function fechaModal(e) {
	const fecharModalE1 = e.currentTarget;
	const modalE1 = fecharModalE1.closest('.modal');
	modalE1.classList.remove('visivel');
}

const mascaraE1 = document.querySelector('#mascara');
mascaraE1.addEventListener('click', fechaModalAberto);

function fechaModalAberto() {
	document.querySelector('modal.visivel').classList.remove('visivel');
}