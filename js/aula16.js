// SELECIONANDO ELEMENTOS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
  //adicionando animação
  imgDado.classList.add('animar')
  sorteado.classList.add('aparecer')

  // tocar efeito sonoro
  dadoRolando.play()

  // ocultando botão de sortear
  btnSortear.style.display = 'none'

  // usar setTimeOut para executar as ações após 1.75 segundos
  setTimeout(function(){
    // armazenar numero da sorte na variavel
    numeroSorteado = getRandomInt(1,6)
    console.log(numeroSorteado)
    imgDado.setAttribute('src', '/images/dado/'+numeroSorteado+'.png')

    sorteado.innerHTML = numeroSorteado

    // exibir o botão de sortear
    btnSortear.style.display = 'inline-block'

    // retirar a animacao
    imgDado.classList.remove('animar')
    sorteado.classList.remove('aparecer')

  }, 1750)
})

// funcao que gera o numero randomico inteiro
function getRandomInt(min, max){
  min = Math.ceil(min) // arredonda para cima ceil = teto
  max = Math.floor(max) // arredonda para baixo floor = piso
  return Math.floor(Math.random() * (max - min + 1)) + min
}