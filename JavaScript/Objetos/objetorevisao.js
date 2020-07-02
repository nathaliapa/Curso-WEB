// coleçãoi dinamica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'cadeira'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo : 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 50,
        endereco: {
            lagradouro: 'Rua ABC',
            numero:123
        }
    },
    condutores:[{
        nome:'junior',
        idade: 19
    }, {
        nome:'ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
       //......
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lagradouro'] = 'Av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)

