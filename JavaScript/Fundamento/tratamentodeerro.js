function tratarErroElancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensgem'
    throw{
        nome:erro.name,
        msg:erro.mensgamem,
        date:new Date
    }
}
function imprimirNomeGritando(obj){
try{
    console.log(obj.nome.toUpperCase()+ '!!!')
   }
   catch (e) {
    tratarErroElancar(e)
   }finally{
       console.log('final')
   }
}

const obj = {nome:'roberto'}
imprimirNomeGritando(obj)