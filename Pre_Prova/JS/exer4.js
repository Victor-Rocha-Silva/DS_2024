
let desconto = 0
class CalculadorIRRF {
    salario;
    constructor(salario) {
        this.salario = salario;
    }
    calcularDescontoIRRF(salario) {
        if (this.salario <= 1903.98) {
            return ("salario isento")
        }
        else if (this.salario >= 1903.99 && this.salario <= 2826.65) {
            return (this.salario, `salario liquido `, (this.salario) - (this.salario * 0.075))
        }
        else if (this.salario >= 2826.66 && this.salario <= 3751.05) {
            return (this.salario, (this.salario) - (this.salario * 0.15))
        }
        else if (this.salario >= 3751.06 && this.salario <= 4664.68) {
            return (this.salario, (this.salario) - (this.salario * 0.225))
        }
        else if (this.salario > 4664.68) {
            return (this.salario, (this.salario) - (this.salario * 0.275))
        }
    }
}
let salario = 3000
let CalculadorIRRF1 = new CalculadorIRRF(salario)
console.log(`salario bruto: ${salario} salario liquido: ${CalculadorIRRF1.calcularDescontoIRRF()}`)