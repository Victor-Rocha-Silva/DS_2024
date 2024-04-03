
class CalculadoraFGTS {
    salario;
    constructor(salario) {
        this.salario = salario;
    }



    calcularFGTS() {
        return (this.salario - (this.salario * 0.08))
    }
}

let CalculadoraFGTS1 = new CalculadoraFGTS(1000)

console.log(`o salario com desconto é: ${CalculadoraFGTS1.calcularFGTS()}`)