class Aluno {
    constructor(nome, sobrenome, curso, semestre) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.curso = curso
        this.semestre = semestre
    }
    exibirInformacoes() {
        return (" nome:" + this.nome + " Sobrenome:" + this.sobrenome + " Curso:" + this.curso + " Semestre:" + this.semestre)
    }
}


let aluno1 = new Aluno("Gustavo", "Rocha", "Administração", "Segundo Semestre");

console.log(aluno1.exibirInformacoes());