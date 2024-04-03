class Retangulo {
    base = 4;
    altura = 8;
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura)
    }
}

let Retangulo1 = new Retangulo(2, 4)
console.log("A área do retangulo é:", `${(Retangulo1.calcularArea())}`)