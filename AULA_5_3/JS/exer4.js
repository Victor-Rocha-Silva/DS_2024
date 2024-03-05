class comida {
    //Caracteristicas
    constructor(nome, data_de_criacão, Onde_pode_ser_encontrado){
        this.nome = nome;
        this.data_de_criacão = data_de_criacão;
        this.Onde_pode_ser_encontrado = Onde_pode_ser_encontrado;
    }
//metodo
}

//instancia

let comida1 = new comida("Alfajor" ,"Medina Sidonia, na Andaluzia, em meados de 711","Guloseima por excelência na Argentina, os alfajores da Cachafaz, uma das marcas líderes de vendas no país vizinho, acabam de chegar ao Brasil trazidos pela importadora Porto a Porto.");
let comida2 = new comida("Petti Suisse", "foi criado na França em. torno de 1850", "O Petit Suisse Danoninho Para Levar Morango une a nutrição e a diversão em qualquer lugar porque fica até 5h fora da geladeira*! *Mantenha refrigerado de 1°C a 10°C. Após retirado da refrigeração, o produto não poderá ser refrigerado novamente e deverá ser consumido em até 5 horas.");

console.log(comida1);
console.log(comida2);