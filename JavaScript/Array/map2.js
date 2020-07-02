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
console.log(resultado);
