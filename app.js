'use strict'

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
function criarImg(imagem) {
    const container = document.getElementById('container')
    const foto = document.createElement('div')
    foto.classList.add('foto')
    const img = document.createElement('img')
    // let texto = document.getElementById('caixa-texto').value
    // const imagens = await buscarImagens()
    img.src = imagem
    foto.appendChild(img)
    container.appendChild(foto)
}

async function carregar(raca) {
   
    const container = document.getElementById('container');
    container.innerHTML = ''; // limpa imagens anteriores
    const imagens = await buscarImagens(raca)
     if(imagens==='Não encontrado'){
        console.log('erro')
        const erro = document.createElement('h2');
        erro.textContent = 'Raça não encontrada!!!';
        container.appendChild(erro);
     }else{
        imagens.forEach(criarImg);
     }
    
}


const botaoBuscar = document.getElementById('buscar')

botaoBuscar.addEventListener('click', () => {
    const input = document.getElementById('caixa-texto').value
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