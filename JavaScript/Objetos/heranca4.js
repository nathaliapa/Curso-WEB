function MeuObjete(){

}

console.log(MeuObjete.prototype)

const obj1 = new MeuObjete
const obj2 = new MeuObjete

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjete.prototype === obj1.__proto__)

MeuObjete.prototype.nome = 'anonimo'
MeuObjete.prototype.falar = function(){
    console.log(`Bom dia ! meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjete.prototype
obj3.nome = 'obj3'
obj3.falar()


// resumindo a loucura........
console.log((new Object).__proto__ === MeuObjete.prototype)
console.log(MeuObjete.__proto__ === MeuObjete.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
