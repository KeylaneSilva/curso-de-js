let imagem = document.querySelector('#img')
imagem.setAttribute('src', '/images/apagada.jpg')
imagem.setAttribute('width', '200px')

let btnAcender = document.querySelector('#btn1')
let btnDesligar = document.querySelector('#btn2')
let btnQuebrar = document.querySelector('#btn3')

//EVENTO DO MOUSE
const acender = () => {
  imagem.setAttribute('src', '/images/acesa.png')

}
const apagar = () => {
  imagem.setAttribute('src', '/images/apagada.jpg')

}
const quebrar = () => {
  imagem.setAttribute('src', '/images/quebrada.jpeg')

}

//EVENTO DO CLIQUE
btnAcender.addEventListener('click', acender)
btnDesligar.addEventListener('click', apagar)
btnQuebrar.addEventListener('click', quebrar)