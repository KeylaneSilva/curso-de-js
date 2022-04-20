// DECLARANDO OBJETOS
let pessoa = {
    nome : 'Keylane',
    idade : 22,
    altura : 1.71,
    peso : 50,
    formacao : 'Ciência da Computação'
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999,2005,2010]
}

// Como acessar uma PROPRIEDADE usando .
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(carros.modelo)

// Como acessar PROPRIEDADE usando ['']
console.log(produtos['descricao'])
console.log(carros['marca'])

// OPERACAO IMC = peso/(altura*altura)
const IMC = pessoa.peso/ (pessoa.altura*pessoa.altura)
console.log(IMC.toFixed(2))

// ATUALIZAR O VALOR da PROPRIEDADE
produtos.descricao = ['Alimenticios', 'Limpeza']
produtos.preco = [20.50, 12.99]
console.log(produtos['descricao'])

// ATUALIZANDO PELO SPREED OPERATOR
produtos.descricao = [...produtos.descricao, 'Laticinios']
console.log(produtos['descricao'])

produtos.preco = [...produtos.preco, 25.99]
console.log(produtos['preco'])

// USANDO SPREED OPERATOR em objetos CONST
carros.marca = [...carros.marca, 'MV']
carros.modelo = [...carros.modelo, 'Fiesta']
carros.ano = [...carros.ano, 2014]
console.log(carros.marca)
console.log(carros.modelo)
console.log(carros.ano)
