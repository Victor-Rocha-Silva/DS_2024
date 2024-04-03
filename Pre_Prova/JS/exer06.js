class Carro {
    marca;
    modelo;
    combustivel;
    consumo;
    constructor(marca, modelo, combustivel, consumo) {
        this.marca = marca
        this.modelo = modelo
        this.combustivel = combustivel
        this.consumo = consumo
    }
    abastecer() {
        return (this.combustivel + 20)
    }
    dirigir() {
        return (this.abastecer() - (200) / this.consumo)
    }
    exibirEstado() {
        return ('Carro:' + this.modelo + ' |Marca:' + this.marca + ' |Nivel de Combustivel Atual:' + this.combustivel + ' |Combustivel Abastecido:' + this.abastecer() + ' |Autonomia Restante:' + this.dirigir())
    }
}

let Carro1 = new Carro('koenigsegg', 'cb850', 60, 10)

console.log(`${Carro1.exibirEstado()}`)
