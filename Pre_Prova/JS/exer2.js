class Produtos {
    nome;
    lado;
    lado1;
    constructor(nome, lado, lado1) {
        this.nome = nome;
        this.lado = lado;
        this.lado1 = lado1;
    }
    calcularTotal() {
        return (this.lado * this.lado1).toFixed(2)
    }
}
let laod = new Produtos("Lado Do Quadrado", 2, 4)
console.log(laod)
console.log(`o Total é: ${(laod.calcularTotal())}`);
