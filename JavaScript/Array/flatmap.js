const escola = [{
    nome:'Turma M1',
    alunos: [{
        nome:'gustavo',
        nota:8.1
    },{
        nome:'ana',
        nota:9.3
    }]
},{
    nome:'turma M2',
    alunos:[{
         nome:'rebeca',
         nota:8.9
    },{
        nome:'roberto',
        nota:7.3
    
    }]

}]

const getNotaDoAluno = a => a.nota
const getNotasTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1);

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);

