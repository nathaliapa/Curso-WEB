const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i in notas){   // recebe o indice do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome:'silva',
    idade:29,
    peso:64
}

for(let atributo in pessoa){         // usar o let para garantir que ele eteja dentor do laço 
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
