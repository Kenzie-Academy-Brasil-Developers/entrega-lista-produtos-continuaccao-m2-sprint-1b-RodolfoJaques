/////////////////////////////////////////////////
// Criar itens no carrinho
const carrinho = document.querySelector('.containerCarrinho');
const ulCarrinho = document.querySelector('.containerCarrinho--ul');
const precoTotal = document.querySelector('.containerPrecoTotal');

function criaItensNoCarrinho(event){

    if(event.target.textContent === 'Adicionar ao Carrinho'){

        const itemCarrinho = document.createElement('li');

        const img = document.createElement('img');
        img.src = event.target.parentNode.children[0].src;

        const nomeProd = document.createElement('span');
        nomeProd.innerText = event.target.parentNode.children[1].textContent;

        const precoProd = document.createElement('span');
        precoProd.innerText = event.target.parentNode.children[2].textContent;

        const secaoProd = document.createElement('span');
        secaoProd.innerText =  event.target.parentNode.children[3].textContent;

        itemCarrinho.appendChild(img);
        itemCarrinho.appendChild(nomeProd);
        itemCarrinho.appendChild(precoProd);
        itemCarrinho.appendChild(secaoProd);
        carrinho.appendChild(itemCarrinho);

        valorTotal(event);
    }
}
containerLista.addEventListener('click',criaItensNoCarrinho);

