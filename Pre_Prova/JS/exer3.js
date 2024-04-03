class Aluno {
    constructor(nome, idade, nota) {
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }
    verificarAprovacao() {
        if (this.nota >= 7) {
            console.log('Aprovado')
        }
        else{
            console.log('Reprovado Vagabundo')
        }

    }
}
let aluno1 = new Aluno("Gustavo", "15 anos", "9");
console.log(aluno1.verificarAprovacao());