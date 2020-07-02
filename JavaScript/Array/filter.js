// percorrer forEach
// tranforma array em forma simples  map
// filtrar o array filter

const produto = [
    {nome:'notbook',preco:2499, fragil:true},
    {nome:'iPad Pro',preco:4199, fragil:true},
    {nome:'Copo de vidro',preco:12.99, fragil:true},
    {nome:'Copo de plastico',preco:8.49, fragil:false}
]

console.log(produto.filter(function(p){
  //  return true
      return false
  //  return p.preco > 2400
}))


const apanesPreco = produto => produto.preco >= 500
const apenasFiltro = produto => produto.fragil 


console.log(produto.filter(apanesPreco).filter(apenasFiltro))
