Array.prototype.map2 = function(callback){

    const newArray = []
    for(let i=0;i<this.length;i++){
       newArray.push(callback(this[i], i ,this))
    }
    return newArray
}

const carrinho = [
    
    '{"nome": "borracha","preco": 3.45}',
    '{"nome": "caderno","preco": 13.90}',
    '{"nome": "kit lapiz","preco": 41.22}',
    '{"nome": "caneta","preco": 7.50}'
]


// retornar um array apenas com os preço

const paraObjeto = json =>JSON.parse(json)    // de json para objeto
const apanesPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apanesPreco)
const resultado = carrinho.map2(paraObjeto).map2(apanesPreco)
console.log(resultado);