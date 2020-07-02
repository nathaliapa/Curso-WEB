const aprovado = ['agatha', 'aldo', 'daniel', 'raquel']

aprovado.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovado.forEach(nome => console.log(nome))


const exibirAprovados = aprovado => console.log(aprovado)
aprovado.forEach(exibirAprovados)
