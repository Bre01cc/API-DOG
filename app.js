'use strict'




async function buscarImagens(texto) {
    const url = `https://dog.ceo/api/breed/${texto}/images`
    const response = await fetch(url)
    const imagem = await response.json()
    return imagem.message
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

async function carregar(texto) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // limpa imagens anteriores
    const imagens = await buscarImagens(texto)
    imagens.forEach(criarImg);
}


const botaoBuscar = document.getElementById('buscar')

botaoBuscar.addEventListener('click', () => {
    const input = document.getElementById('caixa-texto').value
    if (!input) {

    } else {
        carregar(input)
    }

})
// buscarImagens('')
//    const arrayImagens = await buscarImagens()

//    console.log(arrayImagens)