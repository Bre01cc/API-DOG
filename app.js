'use strict'




async function buscarImagens() {
    const url = `https://dog.ceo/api/breed/husky/images`
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
    img.src= imagem
    foto.appendChild(img)
    container.appendChild(foto)
}

async function carregar() {
    const imagens = await buscarImagens()
    imagens.forEach(criarImg)
}
carregar()

// buscarImagens('')
//    const arrayImagens = await buscarImagens()

//    console.log(arrayImagens)