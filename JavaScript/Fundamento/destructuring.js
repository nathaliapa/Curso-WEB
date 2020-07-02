// novo recurso do ES2015

const pessoa = {

    nome:'ana',
    idade:5,
    endereco:{
        lagradouro:'rua ABC',
        numero:10
    }

}

const { nome,idade} = pessoa
console.log(nome, idade)

const{ nome :n , idade : i} = pessoa
console.log(n,i)

const{sobrenome, bmehumorada = true} = pessoa
console.log(sobrenome, bmehumorada)

const{endereco: {lagradouro , numero, cep}} = pessoa
console.log(lagradouro,numero,cep)


