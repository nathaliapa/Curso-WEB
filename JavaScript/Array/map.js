const nums = [1,2,3,4,5]

// for com proposito
let resultado = nums.map(function(element){
    return element *2
})

console.log(resultado)

console.log(resultado, nums)

const soma10 = e => e + 10   // função arrow ja tem retorn implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)