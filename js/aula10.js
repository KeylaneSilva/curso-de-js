let titulo = document.querySelector('h1')
titulo.innerHTML = 'Funções do JS'
let box = document.querySelectorAll('.box')

// FUNÇÕES SEM PARAMETRO E SEM RETORNO (procedure)
function olaMundo(){
  document.write('Olá Mundo sem retorno<br>')
}

// FUNÇÕES SEM PARAMETRO E COM RETORNO (function)
function olaMundo2(){
  return 'Olá Mundo com retorno<br>'
}

// CHAMAR A FUNCAO = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

// FUNCOES COM PARAMENTRO E SEM RETORNO (procedure)
function somar(a,b){
  document.write(a + b + '<br>')
}

// FUNCOES COM PARAMENTRO E COM RETORNO (function)
function somar2(c,d){
  return c+d
}

// CHAMAR A FUNCAO = executar ela
somar(x,y)
document.write(somar2(10, 5))

document.write(`<p>${somar2(x,y)}</p>`)
document.write(`<p>${somar2(5,2)}</p>`)

// Função anonima = nao tem nome pode ou nao ter paramentros pode ou ter retorno
titulo.addEventListener('click', function(){
  alert('Clicou no titulo')
})

// Arrow Function ES6 2015 em diante
const olaMundoArrow = () => document.write('Olá Mundo!!!!!!!')

// nao precisa usar a palavra return
// nao precisa colocar { } se for so uma instrução
// nao precisa usar a palavra function
const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'
olaMundoArrow()
document.write(olaMundo2Arrow())

// Arrow Function ES6 2015 em diante
const nomeFuncao = () => {
    //acoes
}