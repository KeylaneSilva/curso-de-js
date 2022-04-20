// DOM - Document Object Model
/* PARA MANIPULAR O DOM PRECISAMOS
   Indicar qual objeto usar, depois chamar um
   método(função) para selecionar ele, seus dados, trazer
   informações, etc...*/

// .querySelector()
// selecionar elemento com base na tag, #id ou .class
// let titulo = document.querySelector('#titulo')
// let titulo = document.querySelector('h1')
let titulo1 = document.querySelector('#titulo')

console.log(titulo)
console.log(titulo1)

// .textContent || .innerHTML
// propriedade ou atributo textContent
// serve para acessar ou alterar o conteudo
// de um elemento que foi selecionado
console.log(titulo1.textContent)
console.log(titulo1.innerHTML)

titulo1.textContent = 'DOM'
console.log(titulo1.innerHTML)

// .querySelectorAll()
// selecionar todos os elementos com base na tag, #id ou .class
let testando = document.querySelectorAll('.titulo')
// document.write(testando[0].textContent)
// document.write(testando[1].textContent)
// document.write(testando[2].textContent)
// testando[0].textContent = 'texto qualquer'
// document.write(testando[0].textContent)

// EXISTEM também os métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementId()
.getElementsByClassName()
*/

let testTag = document.getElementsByTagName('div')
console.log(testTag)
document.write(testTag[0].textContent)
document.write(testTag[1].textContent)
document.write(testTag[2].textContent)

let testeId = document.getElementById('titulo')
console.log(testeId)

let testeClass = document.getElementsByClassName('box')
console.log(testeClass)
document.write(testeClass[0].textContent)
document.write(testeClass[1].textContent)
document.write(testeClass[2].textContent)

