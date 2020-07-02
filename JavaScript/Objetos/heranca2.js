// cadeias de prototipos (prototype chain)
Object.prototype.attr0 = 'Z'  // nao recomendado 

const avo = {attr1: 'A'}
const pai = {__proto__: avo,attr2:'B'}
const filho = {__proto__: pai,attr3:'C'}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3) // filho nao tem so que o avo tem 
//   console.log(filho.attr4) // avo,filho e pai nao tem 

const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const vovlo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super  chama o metodo do prototipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(vovlo, carro)

console.log(ferrari)
console.log(vovlo)


vovlo.acelerarMais(100)
console.log(vovlo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())