console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos','Ana')
console.log(aprovados)

aprovados = ['bia','carlos','ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('abia')
console.log(aprovados.length)

aprovados[9]= 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === null)

console.log(aprovados)

aprovados.sort()             //mistura nos elementos do array (ordenados)
console.log(aprovados)

delete aprovados[1]
console.log('indice 1 :',aprovados[1])
console.log(aprovados)

aprovados = ['bia','carlos','ana']
aprovados.splice(1,2, 'elemento1' , 'eleento2')         //exclui e adiciona  
//aprovados.splice(2,0, 'elemento1' , 'eleento2')   
//aprovados.splice(1,0, 'elemento1' , 'eleento2')
//aprovados.splice(1,1, 'elemento1' , 'eleento2')
console.log(aprovados)
