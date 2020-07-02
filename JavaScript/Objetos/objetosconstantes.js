// pessoa aponta para um endereço de memoria 123 que aponta para o dado do objeto

const pessoa = {
    nome: 'joao'
}

pessoa.nome='pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
/*pessoa = {
    nome: 'ana'
}*/

Object.freeze(pessoa) //uma vez congelado nao tem como mexer(adicionar, alterar o deletar)
pessoa.nome='Maria'
pessoa.end = 'rua abc'
delete pessoa.nome
console.log(pessoa.nome)


const pessoaConstante = Object.freeze({nome:'joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
