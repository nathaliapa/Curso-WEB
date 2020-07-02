const sequencia = {                                                     //nao aceita sobrecarga de metodos a nao ser get e set
    _valor: 1, //convenção acesso interno (o fato de ter _ nao siginifica que ele é privado )
    get valor(){return this._valor++},
    set valor(valor) {
        if(valor > this._valor)
        this._valor= valor
    }      
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor=900


