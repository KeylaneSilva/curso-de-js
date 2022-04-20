let precoTotal = 9.99

console.log(new Intl.NumberFormat('pt-br').format(precoTotal))
console.log(`${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`)