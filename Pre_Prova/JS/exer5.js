
class CalcularFGTS {
    salario;
    constructor(salario) {
        this.salario = salario;
    }
    CalculadoraFGTS() {
        return (this.salario % 8)
    }
}
let laod = new CalcularFGTS("Lado Do Quadrado")
console.log(laod)
console.log(`o Total é: calcularFGTS()`);