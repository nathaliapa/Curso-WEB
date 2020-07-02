const aluno = [
    {nome:'joao', nota:7.3, bolsista: false},
    {nome:'maria', nota:9.2, bolsista: false},
    {nome:'pedro', nota:9.8, bolsista: false},
    {nome:'ana', nota:8.7, bolsista: false}
]

console.log(aluno.map(a=>a.nota))
const resultado = aluno.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
    
},0)

console.log(resultado)
