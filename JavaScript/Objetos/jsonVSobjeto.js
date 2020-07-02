// JSON objeto gerado apartir de um texto

const objeto = {
    a:1,
    b:2,
    c:3,
    soma(){
        return a + b + c 
    }
}

console.log(JSON.stringify(objeto))

//console.log(JSON.parse("{a:1,b:2,c:3}"))  nao valido
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))  todo metodo de JSON deve utilixar (" ") aspas duplas
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))  // objeto mais com aspas simples(' ') e o menos com ("")aspas duplas

console.log(JSON.parse('{"a":1,"b":"string","c": true,"d":{},"e":[]}'))

// console.log(JSON.parse('{"a":1,"b":\'string\',"c": true,"d":{},"e":[]}'))  // qualque texto dentro do JSON tem que ter aspas duplas(" ") e os atributos tambem
