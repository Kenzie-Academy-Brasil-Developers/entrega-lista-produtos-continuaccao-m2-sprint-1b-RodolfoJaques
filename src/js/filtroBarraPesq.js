/////////////////////////////////////////
//filtro Barra de pesquisa
const filtro = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
const input = document.querySelector('.campoBuscaPorNome');

function filtroBarraPesquisa(string,array){

    const produtosFiltrados = array.filter((prod) => {

        if(prod.nome.toLowerCase().includes(string.toLowerCase())){
            return prod;
        }else if(prod.categoria.toLowerCase().includes(string.toLowerCase())){
            return prod;
        }else if(prod.secao.toLowerCase().includes(string.toLowerCase())){
            return prod;
        }
    })
    
    return produtosFiltrados;

}

filtro.addEventListener('click',() => {

    console.log(input);
    if(input.value !== ''){
        criaElementosMostruario(filtroBarraPesquisa(input.value,produtos));
    }
});
input.addEventListener('keydown',(event) => {

    if(event.key === 'Enter'){
        criaElementosMostruario(filtroBarraPesquisa(input.value,produtos));
    }
});