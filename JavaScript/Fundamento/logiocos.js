function compras(trabalho1 , trabaloh2){
    const comprarSorvete = trabalho1 || trabaloh2 
    const comprarTv50 = trabalho1 && trabaloh2 
   // const comprarTv32 = !!(trabaloh1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabaloh2
    const manterSaudavel = !comprarSorvete  // operador unario

    return {comprarSorvete, comprarTv50, comprarTv32,manterSaudavel}


}

console.log(compras(true , true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
