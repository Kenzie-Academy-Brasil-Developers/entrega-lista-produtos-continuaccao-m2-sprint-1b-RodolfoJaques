//filtro hortifruti
function preparandoFiltroHortifruti(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i].secao === 'Hortifruti'){
            itensFiltrados.push(arr[i]);
        }
    }
}

function filtroDeBotao(event){    

    if(event.target.textContent === 'Mostrar Hortifruti'){
        
        limpaArray(itensFiltrados);
        preparandoFiltroHortifruti(produtos);
        criaElementosMostruario(itensFiltrados);

    }else if(event.target.textContent === 'Mostrar Todos'){
        
        limpaArray(itensFiltrados);
        criaElementosMostruario(produtos);
    }
}
const divFiltros = document.getElementById('filters');
divFiltros.addEventListener('click',filtroDeBotao);
