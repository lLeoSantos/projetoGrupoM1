const botoes = document.querySelectorAll('[data-abre-modal]')
const mascara = document.querySelector('#mascara')
//loop responsavel por adicionar botao do vetor na variavel
for (let botaoEl of botoes){
	botaoEl.addEventListener('click', abreModal);
}
//manipulador de eventos
function abreModal(e) {
	//identifica o alvo do evento
	const botaoClicadoEl = e.currentTarget;
	//seta o valor do botao clicado
	const seletorDoModal = botaoClicadoEl.dataset.abreModal;
	//recebe o modal certo
	const modalEl = document.querySelector(seletorDoModal);
	//adiciona a classe visivel
	modalEl.classList.add('visivel');
	
}
//forEach executa a função em todos os elementos
const botoesDeFechar = document.querySelectorAll('.fechar-modal');
botoesDeFechar.forEach(fechaE1 => fechaE1.addEventListener('click',fechaModal));

function fechaModal(e) {

	const fecharModalE1 = e.currentTarget;
	const modalEl = fecharModalE1.closest('.modal');
	modalEl.classList.remove('visivel');
}

const mascaraEl = document.querySelector('mascara');
mascaraEl.addEventListener('click', fechaModal);

function fechaModalAberto() {
	document.querySelector('modal.visivel').classList.remove('visivel');
}
