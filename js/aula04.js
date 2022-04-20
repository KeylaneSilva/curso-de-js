// DECLARANDO ARRAYS

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10,20,30)
let meses = ['Jan', 'Fev', 'Mar', 'Abril']
meses[0] = 'Janeiro'
meses[1] = 'Fevereiro'
meses[2] = 'Março'

// ADICIONAR no final oush = empurre
produtos.push('Açucar', 'Trigo')
codigos.push(40,50,60,70)
meses.push('Maio, Jun, Jul, Dez')

// REMOVER no final da pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maça')

// REMOVER do inicio shift
produtos.shift()

// REMOVER de uma posição especifica splice = emendar
// posição inicial, quandos remover
produtos.splice(3,1)
codigos.splice(4,2)

// COPIAR array slice = fatiar porção
// posição inicial, quando copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,2)

// VER TAMANHO DO ARRAY length = comprimento
// console.log(produtos.length)
// console.log(meses.length)
// console.log(codigos.length)

// spreed operator
let teste = [...produtos, 'Ovo', 'Pera']

// console.log(produtos)
// console.log(codigos)
// console.log(meses)
// console.log(meses1)
// console.log(meses2)
// console.log(teste)


let comidaFavorita = ['Arroz', 'Gordura', 'Farofa']
let lancheFavorito = ['Misto', 'Danone']

console.log(comidaFavorita)
console.log(lancheFavorito)

comidaFavorita.push('Peixe a escabeche', 'Creme de camarão', 'Peru')
lancheFavorito.push('Abacaxi', 'Melancia', 'Laranja')

comidaFavorita.splice(3,1)
lancheFavorito.splice(1,1)
lancheFavorito.unshift('Suco de maracujá')
let topFavoritos = [...comidaFavorita, ...lancheFavorito]

console.log(topFavoritos)

for (i = 0; i < topFavoritos.length; i++){
  console.log(`${i} - ${topFavoritos[i]}`)
}

for (let comidas in topFavoritos) {
  console.log(`${comidas} - ${topFavoritos[comidas]}`)
  
}



