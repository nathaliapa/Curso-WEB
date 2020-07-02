const aluno = [
    {nome:'joao', nota:7.3, bolsista: false},
    {nome:'maria', nota:9.2, bolsista: true},
    {nome:'pedro', nota:9.8, bolsista: false},
    {nome:'ana', nota:8.7, bolsista: true}
]
// desfio 1: todos os alunos são bolsistas

const todosBolsistas = (resultado , bolsista) => resultado && bolsista
console.log('todos os alunos são bolsistas ?')
console.log(aluno.map(a=>a.bolsista).reduce(todosBolsistas))


// desafio 2: Algum aluno é bolsista

const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log('Algum aluno é bolsista ?')
console.log(aluno.map(a=>a.bolsista).reduce(algumBosista))