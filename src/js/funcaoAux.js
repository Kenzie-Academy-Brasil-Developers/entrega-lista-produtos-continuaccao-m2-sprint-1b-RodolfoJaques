///////////////////////////////////////
//Função para limpar array
function limpaArray(array){

    for(let i = array.length; i >= 0; i--){
        
        array.pop();
    }
}

//// mostra o valor total das mercadorias//////////////////
let contador = 0; 
function valorTotal(event){

    let eStringNumber = event.target.parentNode.children[2].textContent.slice(3);
    let eNumber = Number(eStringNumber);

    contador += eNumber;
    precoTotal.children[0].children[0].textContent = contador.toFixed(2);
}