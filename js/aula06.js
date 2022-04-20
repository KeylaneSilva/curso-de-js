let precoTotal = 9.99

console.log(new Intl.NumberFormat('pt-br').format(precoTotal))
console.log(`${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`)
console.log(`${precoTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`)
console.log(`${precoTotal.toLocaleString('ja-JA', { style: 'currency', currency: 'JPY'})}`)

let lutador = 'Fedor Vladiirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83

document.write(`<h3>Informações</h3>`)
document.write(`<p>Lutador: ${lutador} </p>
                <p>Nacionalidade: ${nacionalidade} </p>
                <p>Idade: ${idade} anos </p>
                <p>Peso: ${peso} Kg </p>
                <p>Altura: ${altura} m</p>`)

document.write(`<h3>Frase do dia</h3>`)
let data = new Date()
let dia = data.getDate()
let mes = (data.getMonth() + 1)
let ano = data.getFullYear()
let fraseDoDia = 'Seja curioso. Leia tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.<br> <i>Aaron Swartz</i>'
document.write(`${dia}/${mes}/${ano}<br>`)
document.write(`${fraseDoDia}`)

document.write(`<h3>Array de Meses do Ano </h3>`)
let semestre1 = ['Jan', 'Fev','Dez', 'Mar', 'Abril','Maio', 'Jun','Set']
semestre1.pop()
semestre1.splice(2,1)
let semestre2 = [...semestre1,'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
document.write(`${semestre2}`)

document.write(`<h3>Objeto do Jogo</h3>`)
let objetoJogo = {
  jogo: 'League Of Legends - LOL',
  desenvolvido: 'Riot Games',
  anoLancamento: 2009
}

document.write(`Jogo: ${objetoJogo.jogo} <br>
                Desenvolvido por: ${objetoJogo.desenvolvido} <br>
                Ano lançamento: ${objetoJogo.anoLancamento}`)



