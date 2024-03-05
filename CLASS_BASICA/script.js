//METODO SEM CONSTRUTOR
// class animal {
//     //Caracteristicas
//     nome;
//     especie;
//     alimentação;
//metodo
// }

//instancia

// let animal1 = new animal();
// let animal2 = new animal();

// animal1.nome = "Gato"
// animal1.especie = "Felino"
// animal1.alimentação = "Rato,Ração"

// animal2.nome = "Cachorro"
// animal2.especie = "Mamifero"
// animal2.alimentação = "Ração"

// console.log(animal1)
// console.log(animal2)

        //METODO CONSTRUTOR
class animal {
    //Caracteristicas
    constructor(nome, especie, alimentação){
        this.nome = nome;
        this.especie = especie;
        this.alimentação = alimentação;
    }
//metodo
}

//instancia

let animal1 = new animal("gato" ,"felino","Ração");
let animal2 = new animal("Cachorro", "Mamifero", "Ração");

console.log(animal1);
console.log(animal2);