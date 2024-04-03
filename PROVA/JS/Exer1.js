class Livro {
    constructor(titulo, autor, anoPublicado) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicado = anoPublicado
    }

    informacoesLivro() {
        return('Nome Do livro: ' + this.titulo + ' |Autor: ' + this.autor + ' |Ano De Publicação: ' + this.anoPublicado)
    }
}

let livro1 = new Livro ('Harry Potter' , 'Jack holling' , '1900')
console.log(`${(livro1.informacoesLivro())}`)