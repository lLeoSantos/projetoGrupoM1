//funçao para pegar os elementos da pagina
// getElement vai receber os parametros (queries) que quero fazer
                    //spreed operator                     //queries que eu recebi
const getElement = (...queries) => document.querySelector(...queries);

//pegando elementos
const button = getElement('.open-modal-button');
const container = getElement('.modal-container');
const modal = getElement('.modal');
//variavel
const activeModalClass = 'modal-show';

// criando funções para abrir e fechar modal
//classList retorna lista de classes do container
//adicionando a classe modal-show na lista de classes do container
const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

//evento click do botao
button.addEventListener('click', openModal);

//se o modal contem o evento target, nao fechar o modal
container.addEventListener('click', (event) => {
	if (modal.contains(event.target)) return;
	
	closeModal();
});

