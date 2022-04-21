let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 - Manipular CSS'
titulo.innerHTML = 'Aula 09-Manipular CSS - JS'

let image = document.querySelector('#foto')
image.setAttribute('src', '../images/pride-fc.jpg')
image.setAttribute('width', '250px')

titulo.style.color = 'red'
titulo.style.backgroundColor = '#000'
titulo.style.borderBottom = '2px solid red'
titulo.style.padding = '0.625rem'
titulo.style.borderRadius = '5px'

let box = document.querySelectorAll('.box')
console.log(box)

box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

box[0].querySelector('p').innerHTML = 'Imagem de uma logo com o slogan &quot;PRODEFC&quot;'
box[1].querySelector('h2').innerHTML = 'Seu carro protegido'
box[1].querySelector('p').innerHTML = 'Projeta seu carro por uma preço que cabe no seu bolso'

box[1].querySelector('p').style.marginTop = '10px'

// MODOS DE COR

let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark(){
  console.log('modoDark')
  tela.setAttribute('id', 'btdark')
  // tela.removeAttribute('class', 'light')
}

function modoLight(){
  console.log('modoLight')
  tela.setAttribute('id', 'btlight')
}

