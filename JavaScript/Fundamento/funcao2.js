//armazenando uma função em uma variavel

const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenar uma função arrow em uma varavel

const soma = (a,b) => {
    return a+b
}

console.log('arrow = '+soma(2,3))


// retorno implicito

const subtracao = (a,b) => a-b
console.log('impricito = '+subtracao(2 ,3))

const imprimir2 =a =>console.log(a)
imprimir2('legal!!!')