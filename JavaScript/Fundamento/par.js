// par nome/valor

const saudacao = 'opa'  // contexto lexico 1 

function exec(){
    const saudacao = 'falaaa'    // contextp lexico 2
    return saudacao
}
  //objetos são grupos aninhados de pares nome/valor

  const cliente = {
   nome:'pedro',
   idade:32,
   peso: 90,
   endereco:{
       lagradouro: 'rua muito legal',
       numero:123
   }

  }

  console.log(saudacao)
  console.log(exec())
  console.log(cliente)
