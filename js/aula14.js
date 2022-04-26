let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

let resultado = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')


const limpar = () => {
  cxNome.innerHTML = ""
  cxIdade.innerHTML = ""
  cxPeso.innerHTML = ""
  cxAltura.innerHTML = ""

  dados[1].innerHTML = ""
  dados[2].innerHTML = ""
  dados[3].innerHTML = ""
  dados[4].innerHTML = ""
  dados[5].innerHTML = ""
}

const situacaoDoPeso = (imc) => {
  let situacao = ''
  if (imc < 18.5) {
      situacao = 'Baixo peso'
  } else if (imc >= 18.5 && imc <= 24.9) {
      situacao = 'Peso normal'
  } else if (imc >= 25 && imc <= 29.9) {
      situacao = 'Sobrepeso'
  } else if (imc >= 30 && imc <= 34.9) {
      situacao = 'Obesidade I'
  } else if (imc >= 35 && imc <= 39.9) {
      situacao = 'Obesidade II'
  } else if (imc >= 40) {
      situacao = 'Obesidade III'
  } else {
      situacao = 'Informe seu peso corretamente'
  }
  return situacao
}

const calcIMC = (event) => {
  let nome = cxNome.value
  let idade = cxIdade.value
  let peso = cxPeso.value
  let altura = cxAltura.value

  let imc = peso/(altura*altura)
  resultado.value = imc.toFixed(2)
  let situacao = situacaoDoPeso(imc)

  let pessoa = {
    nome: nome,
    idade:  idade,
    peso: peso,
    altura: altura,
    imc:  imc,
    situacao: situacao
  }

  // alert(
  //   'Nome ' + nome + '\n' +
  //   'Idade ' + idade + '\n' +
  //   'Peso ' + peso + '\n' +
  //   'Altura ' + altura + '\n' +
  //   'IMC ' + imc + '\n' +
  //   'Situação: ' + situacao + '\n'
  // )

  // console.log(dados)
  dados[1].innerHTML = pessoa.nome
  dados[2].innerHTML = pessoa.idade
  dados[3].innerHTML = pessoa.peso
  dados[4].innerHTML = pessoa.altura
  dados[5].innerHTML = (pessoa.imc).toFixed(2) + ' - ' + situacao
  event.preventDefault()

}

btnLimpar.addEventListener('click', limpar)
btnEnviar.addEventListener('click', calcIMC)




