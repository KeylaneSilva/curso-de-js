const carregou = () => console.log('Pagina carregada com sucesso')
// function carregou () {
//   console.log('Pagina carregada com sucesso')
// }
const focou = () => console.log('Foco no titulo')
const rolouPagina = () => console.log('Pagina rolando')
const focoNoCampo = () => console.log('Foco no campo do texto')
const semFocoNoCampo = () => console.log('Saiu do foco do texto')
// const avisarQueTeclou = () => console.log('Avisar que teclou')

let letra = document.querySelector('input[type=text]')
const avisarQueTeclou = () => {
  console.log('Está teclando' + (letra.value.length + 1))
}

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btnEnviar = document.querySelector('#btn3')

btn1.addEventListener('mouseover', function(){
  console.log('Focou bo botão 1')
})
btn1.addEventListener('mouseout', function(){
  console.log('Tirando o foco do botão 1')
})

// ativado quando o elemento sai do foco
btn2.addEventListener('blur', function(){
  console.log('Foco no botão 2')
})
// nao recarrega a pagina
btnEnviar.addEventListener('click', function(event){
  event.preventDefault()
  console.log('Clicou no botão de enviar')
})