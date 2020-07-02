Array.prototype.filter2 = function(callback){

    const newArray = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
     } 
     return newArray
}

const produto = [
    {nome:'notbook',preco:2499, fragil:true},
    {nome:'iPad Pro',preco:4199, fragil:true},
    {nome:'Copo de vidro',preco:12.99, fragil:true},
    {nome:'Copo de plastico',preco:8.49, fragil:false}
]


const apanesPreco = produto => produto.preco >= 500
const apenasFiltro = produto => produto.fragil 


console.log(produto.filter2(apanesPreco).filter2(apenasFiltro))
