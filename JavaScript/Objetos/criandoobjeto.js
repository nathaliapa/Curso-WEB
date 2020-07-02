// usando a notação literal

const obj1 = {}
console.log(obj1)

// object em js
console.log(typeof Object, typeof new Object)
const obj2 =  new Object
console.log(obj2)

//função construtoras

function Produto(nome, preco ,desc){
    this.nome = nome,
    this.getPrecoComDesconto = () =>{
        return preco * (1-desc)
    } 
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notbook', 2998.88, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFunção(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-false)
        }
    }
}

const f1 = criarFunção('joao', 7800,4)
const f2 = criarFunção('maria',1800,1)
console.log(f1.getSalario(), f2.getSalario())

//object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// uma função famosa que retorna objeto......
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)