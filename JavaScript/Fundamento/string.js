const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!' )
// console.log(' 3 ' + 2 ) nao vai somar e sim concatenaer e o resultado = 32 e se no lugar de + for - sera = 1
console.log(escola.replace(3, 'e'))   // (/\/d , 'e')

console.log('Ana, Maria, Pedro'.split(','))  // split = separados  (/./)
