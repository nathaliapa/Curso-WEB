const pilotos = ['vetel', 'alonso','raikkonen','massa']
pilotos.pop()  // massa quebrou o carro   / remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift()   // tira da primiera posição
console.log(pilotos)

pilotos.unshift('hamilton')    //adiciona na primeira posição
console.log(pilotos)


//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'bottas','massa')
console.log(pilotos)


//remover
pilotos.splice(3,1) // masssa quebrou
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)  // novo array apartir de indicice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)  //de 1 ate 4 so que o ultimo nao entra   // slice pegar um pedaço do array
console.log(algunsPilotos2)