Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResltado = function(nota){
    if(nota.entre(9,10)){
        console.log('quadro de honra')
    } else if(nota.entre(7,8.99)){
        console.log('aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('recuperação')
    }else if(nota.entre(0,3.99)){
        console.log('reprovado')
    }else{
        console.log('nota invalida')
    }

}

imprimirResltado(10)
imprimirResltado(8.9)
imprimirResltado(6.55)
imprimirResltado(2.3)
imprimirResltado(-1)
imprimirResltado(11)