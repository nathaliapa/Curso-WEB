// Object.preventExtensions      nao adiciona mas exclui

const produto = Object.preventExtensions({
    nome:'qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('extensivel', Object.isExtensible(produto))

produto.nome='borracha'   // permite alterar os dados quando nao esta no freeze
produto.descrcao = 'borracha escolar branca' // adicionar
delete produto.tag      //excluir 
console.log(produto)

//object.seal

const pessoa ={     //nao adicona novos e exclui , mas e possivel mexer no que ja existe
    nome:'julia',
    idade: 18        
}

Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


//object.freeze = selado + valores constantes

