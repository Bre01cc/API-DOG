/*
DEFER:garante que o navegador só execute o script depois que o HTML tiver sido totalmente carregado e processado.

USE STRICT:ativa o modo faz o navegador (ou ambiente de execução) aplicar regras mais rígidas,
ajudando a evitar erros comuns e más práticas.

ASYNC/AWAIT: o await só pode ser usado em uma função async com o propósito de agurda as informações vinda da requisição.

ASYNC:transforma a função automaticamente em uma função que retorna Promise.
Assim, você pode “pausar” o código com await até a resposta chegar.

FETCH:responsavel por fazer a requisição e devolve uma promessa, isso porque não é certeza que a resposta da requisição irá chegar. 
Com isso o código da sequencia antes do retorno dos dados.

*/

'use strict'
//Responsavel por fazer a requisição e devolver o JSON da DOG API
async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagem = await response.json()
    
    if(response.status===404){

        let mensagem = "Não encontrado"
        return mensagem

    }else{

    return imagem.message

    }    
}
//Responsave por criar as imagens dos cachorros na página
function criarImg(imagem) {
    const container = document.getElementById('container')
    const foto = document.createElement('div')
    foto.classList.add('foto')
    const img = document.createElement('img')
    img.src = imagem
    foto.appendChild(img)
    container.appendChild(foto)
}

//Responsave por percorrer o JSON e por chamar as duas funções acima
async function carregar(raca) {
   
    const container = document.getElementById('container');
    container.innerHTML = ''; // limpa imagens anteriores
    const imagens = await buscarImagens(raca)
     if(imagens==='Não encontrado'){
        const erro = document.createElement('h2');
        erro.textContent = 'Raça não encontrada!!!';
        container.appendChild(erro);
     }else{
        imagens.forEach(criarImg);
     }
    
}


const botaoBuscar = document.getElementById('buscar')

//Botão responsavel por executar a função carregar quando for clicado.
botaoBuscar.addEventListener('click', () => {
    const input = document.getElementById('caixa-texto').value.toLowerCase()
    if (!input) {
         const container = document.getElementById('container');
          container.innerHTML = '';
         const erro = document.createElement('h2');

        erro.textContent = 'O campo não pode ficar vazio!!!';
        container.appendChild(erro);
    } else {
      
        carregar(input)
    }

})
// buscarImagens('')
//    const arrayImagens = await buscarImagens()

//    console.log(arrayImagens)