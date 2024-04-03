class Produtos {
    nome;
    lado;
    constructor(nome, lado) {
        this.nome = nome;
        this.lado = lado;
    }
    calcularTotal() {
        return (this.lado * this.lado)
    }
}
let laod = new Produtos("Lado Do Quadrado", 2)
console.log(`o Total é: ${(laod.calcularTotal())}`);
