
const containerLista = document.getElementById('listProdutos');
const lista = document.querySelector('ul');

const itensFiltrados = [];

function criaElementosMostruario(arr){

    lista.innerHTML = '';

    arr.forEach((prod) => {

        const itemLista = document.createElement('li');
        itemLista.classList.add('itemLista');

        const imagem = document.createElement('img');
        imagem.src = prod.img;
        imagem.alt = prod.alt;

        const tituloH3 = document.createElement('h3');
        tituloH3.innerText = prod.nome;

        const pPreco = document.createElement('p');
        pPreco.innerText = `R$ ${prod.preco}`;

        const spanSecao = document.createElement('span');
        spanSecao.innerText = prod.secao;

        const infosNutricionais = document.createElement('ol');
        
        prod.componentes.forEach((componente) => {
            
            infosNutricionais.innerHTML += `<li>${componente}</li>`
        })

        const botao = document.createElement('button');
        botao.innerText = 'Adicionar ao Carrinho';
        
        
        itemLista.appendChild(imagem);
        itemLista.appendChild(tituloH3);
        itemLista.appendChild(pPreco);
        itemLista.appendChild(spanSecao);
        itemLista.appendChild(infosNutricionais);
        itemLista.appendChild(botao);        
        
        lista.appendChild(itemLista); 
    })
}
criaElementosMostruario(produtos);

