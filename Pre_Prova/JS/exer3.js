class Aluno {
    constructor(nome, idade, nota) {
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }
    verificarAprovacao() {
        if (this.nota < 7) {
            console.log('Reprovado Vagabundo')
        }
        else if (this.nota >= 7) {
            console.log('Aprovado')
        }

    }
}
let aluno1 = new Aluno("Gustavo", "15", "6");
console.log(aluno1.verificarAprovacao());