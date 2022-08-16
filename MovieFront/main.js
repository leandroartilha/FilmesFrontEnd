const urlCategoria = "http://localhost:64510/Categorias"
const urlFilmes = "http://localhost:64510/Filmes"

//imprimir todas as categorias
function getCategoria(){

    axios.get(urlCategoria)
        .then(response => {
            const data = response.data

            let renderResults = document.getElementById('renderResults');
            let arrayNomes = []

            for(let i=0; i<data.categorias.length; i++){

                arrayNomes.push(`
                <div class="card">
                    <a href="./pages/${data.categorias[i].nome}.html">${data.categorias[i].nome}
                    <img  class="imagemCard"src="${data.categorias[i].imagemUrl}" alt="">
                    </a>
                    
                </div>
                `);
            }

            let semVirgula = arrayNomes.join(' ');
            renderResults.innerHTML = semVirgula;
            //renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))

}

getCategoria();

//imprimir todos os filmes
function getFilme(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmes');
        let arrayNomes = []
        

        for(let i=0; i<data.filmes.length; i++){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <a class="info" onclick="mostrarInfos(${data.filmes[i].filmeId})" href="./detalhes/informacoes.html">Ver Informações</a>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="./detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            
            `);
        }

        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
        //renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}

getFilme();



//render Aventura

function getFilmeAventura(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmesAventura');
        let arrayNomes = []

        for(let i=0; i<data.filmes.length; i++){
            if(data.filmes[i].categoriaId == 2){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <p class="info" onclick="mostrarInfos(${data.filmes[i].filmeId})" href="detalhes/informacoes.html">Ver Informações</p>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            `);
            }
        }
        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
        //renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}

getFilmeAventura();

//render acao

function getFilmeAcao(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmesAção');
        let arrayNomes = []
        
        for(let i=0; i<data.filmes.length; i++){
            if(data.filmes[i].categoriaId == 1){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <p class="info" onclick="mostrarInfos(${data.filmes[i].filmeId})" href="./detalhes/informacoes.html">Ver Informações</p>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            `);
            }
        }
        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
    })
    .catch(error => console.log(error))
}
getFilmeAcao();

//render Comedia

function getFilmeComedia(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmesComedia');
        let arrayNomes = []
        
        for(let i=0; i<data.filmes.length; i++){
            if(data.filmes[i].categoriaId == 3){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <p class="info" onclick="mostrarInfos(${data.filmes[i].filmeId})" href="detalhes/edit.html">Ver Informações</p>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            `);
            }
        }
        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
        //renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}
getFilmeComedia();

function getFilmeTerror(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmesTerror');
        let arrayNomes = []
        
        for(let i=0; i<data.filmes.length; i++){
            if(data.filmes[i].categoriaId == 6){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <p class="info">Ver Informações</p>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            `);
            }
        }
        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
        //renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}
getFilmeTerror();

function getFilmeDrama(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmesDrama');
        let arrayNomes = []
        
        for(let i=0; i<data.filmes.length; i++){
            if(data.filmes[i].categoriaId == 4){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <p class="info">Ver Informações</p>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            `);
            }
        }
        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
        //renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}

getFilmeDrama();

function getFilmeInfantil(){

    axios.get(urlFilmes)
    .then(response => {
        const data = response.data

        let renderFilmes = document.getElementById('renderFilmesInfantil');
        let arrayNomes = []
        for(let i=0; i<data.filmes.length; i++){
            if(data.filmes[i].categoriaId == 5){

            arrayNomes.push(`
            <div class="card">
                <h3>${data.filmes[i].nome}</h3>
                <img  class="imagemCard"src="${data.filmes[i].imagemUrl}" alt="">
                <p class="info">Ver Informações</p>
                <div class="editLixo">
                    <a class="edit" onclick="mostrarAtt(${data.filmes[i].filmeId})" href="detalhes/edit.html">Editar</a>
                    <a class="lixo" onclick="deleteMovie(${data.filmes[i].filmeId})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></a>
                </div>
            </div>
            `);
            }
        }
        let semVirgula = arrayNomes.join(' ');
        renderFilmes.innerHTML = semVirgula;
        //renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}

getFilmeInfantil();

/*

INFORMACOES
INFORMACOES
INFORMACOES
INFORMACOES

*/

//ADICIONAR 
//POST

function addNewMovie(){
    const data = Request.data
    console.log(Request.data)
    axios.post(urlFilmes,
        {
        nome: document.getElementById("nomeFilme").value,
        descricao: document.getElementById("descricaoFilme").value,
        imagemUrl:document.getElementById("urlFilme").value,
        diretor: document.getElementById("diretorFilme").value,
        atores: document.getElementById("atoresFilme").value,
        ano:document.getElementById("anoFilme").value,
        duracao:document.getElementById("duracaoFilme").value,
        faixaEtaria:document.getElementById("faixaEtariaFilme").value,
        classificacaoEstrela:document.getElementById("notaFilme").value,
        categoriaId:document.getElementById("categoriaFilme").value
    })
    .then(response =>{
        window.alert("Filme Adicionado!")
        console.log(response.data)
    })
    .catch(error => console.log(error))
}


//DELETE
//DELETE
//DELETE
//DELETE
//DELETE

function deleteMovie(id, nome){
    console.log(id);
    axios.delete(`${urlFilmes}/${id}`)
    .then(response => {
        alert(`Filme Excluído`)
        location.reload();
    })
    .catch(error => console.log(error))
}


//ATUALIZAR
//ATUALIZAR
//ATUALIZAR
//ATUALIZAR
//ATUALIZAR
//ATUALIZAR


function mostrarAtt(id){
    localStorage.att = id;
    pageAtualizar(localStorage.att);
}

function pageAtualizar(id){
    axios.get(`${urlFilmes}/${id}`)
    .then(response => {
        const data = response.data;
        let renderAtt = document.getElementById('renderAtt');    

        let page = `<div class="card">
        <h3 class="titleCard">${data.nome}</h3>
        <img  class="imagemCard"src="${data.imagemUrl}" alt="">
        <p class="itens">Descrição: ${data.descricao}</p>
        <p class="itens">Diretor: ${data.diretor}</p>
        <p class="itens">Atores: ${data.atores}</p>
        <p class="itens">Ano: ${data.ano}</p>
        <p class="itens">Duração: ${data.duracao}</p>
        <p class="itens">Faixa Etária: ${data.faixaEtaria}</p>
        <p class="itens">Ano: ${data.ano}</p>
        <p class="itens">Nota: ${data.classificacaoEstrela}</p>
    </div>`
       
        renderAtt.innerHTML = page; 
    })
    .catch(error => console.log(error))

}
pageAtualizar(localStorage.att);


function updateMovie(id){

    axios.put(`${urlFilmes}/${id}`,
    {
        /*(nome:"Leandro",
        descricao:"certo",
        imagemUrl:"kjeojfe",
        atores:"girafales",
        ano:2010,
        duracao: 30,
        faixaEtaria:4,
        classificacaoEstrela:2,
        categoriaId: 5
        */

        nome: document.getElementById("nomeFilmeEdit").value,
        descricao: document.getElementById("descricaoFilmeEdit").value,
        imagemUrl:document.getElementById("urlFilmeEdit").value,
        diretor: document.getElementById("diretorFilmeEdit").value,
        atores: document.getElementById("atoresFilmeEdit").value,
        ano:document.getElementById("anoFilmeEdit").value,
        duracao:document.getElementById("duracaoFilmeEdit").value,
        faixaEtaria:document.getElementById("faixaEtariaFilmeEdit").value,
        classificacaoEstrela:document.getElementById("notaFilmeEdit").value,
        categoriaId:document.getElementById("categoriaFilmeEdit").value
    
    })
    .then(response =>{
        displayOutput(response)
    })
    .catch(error => console.log(error))

}


function mostrarInfos(id){
    localStorage.info = id;
    getFilmeOne(localStorage.info);

}

function getFilmeOne(id){
    axios.get(`${urlFilmes}/${id}`)
    .then(response => {
        const data = response.data;
        let renderInfo = document.getElementById('renderInfo');    

        let page = `<div class="card">
        <h3 class="titleCard">${data.nome}</h3>
        <img  class="imagemCard"src="${data.imagemUrl}" alt="">
        <p class="itens">Descrição: ${data.descricao}</p>
        <p class="itens">Diretor: ${data.diretor}</p>
        <p class="itens">Atores: ${data.atores}</p>
        <p class="itens">Ano: ${data.ano}</p>
        <p class="itens">Duração: ${data.duracao}</p>
        <p class="itens">Faixa Etária: ${data.faixaEtaria}</p>
        <p class="itens">Ano: ${data.ano}</p>
        <p class="itens">Nota: ${data.classificacaoEstrela}</p>
    </div>`
       
        renderInfo.innerHTML = page; 
    })
    .catch(error => console.log(error))

}
getFilmeOne(localStorage.info);



