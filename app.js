'use strict'



async function buscarImagens() {
    const url = `https://dog.ceo/api/breed/husky/images`
    const response = await fetch(url)
    const imagem = await response.json()
    // console.log(imagem.message[30])
    return imagem.message
}


function criarImg() {
    const container = document.getElementById('container')
    const foto = document.createElement('div')
    const img = document.createElement('img')
    let texto = document.getElementById('caixa-texto').value
    const imagens = buscarImagens()
    img.src = imagens
    foto.appendChild(img)
    container.appendChild(foto)
}

function carregar() {
    const imagens = buscarImagens()
    imagens.array.forEach(criarImg)
}
carregar()
// buscarImagens('')
//    const arrayImagens = await buscarImagens()

//    console.log(arrayImagens)