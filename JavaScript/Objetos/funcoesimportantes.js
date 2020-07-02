const pessoa = {
    nome:'rebeaca',
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e=>{   // e = [chave, valor]
    console.log(`${e[0]}:${e[1]}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
        enumerable: true,
        writable: false,
        values: '01/01/2017'
    }
)   //definir caractereisticas a uma propriedade exe=(se ficara ou nao visivel)

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// object.assing (ESMAScript 2015)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
