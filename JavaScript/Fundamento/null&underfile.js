let valor // nao inicializado

console.log(valor)
//  console.log(valor2)  // nao foi declarado

valor = null  // ausencia de valor e foi definida 
console.log(valor)
//  console.log(valor.toString())  // erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explicita
console.log(produto.preco)
// delete produto.preco  // tirar o preco do produto
console.log(produto)

produto.preco = null // sem preço
console.log(produto.preco)
console.log(produto)