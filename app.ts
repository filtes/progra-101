
console.log('Hola Dios es Amor Infinito');
console.log('Ama a Dios Sobre toda las cosas');
console.log('Dios Tiene El Control De Todo');



function saludar(name='Alfredo'){
    console.log('Dios es Amor ' + name );
}

saludar();

// Objetos
let carro ={
    color:'Blanco',
    traccion:'4 x 4',
    llantas: 4,
    puertas: 5,
    marca:'Chevrolet'

}

console.log(carro.marca);

let person ={
    nombre:'Melissa',
    edad: 30,
    esActiva: true,
    pasatiempos:['Voleibol', 'Basketbol','Fútbol'], 
    toString(){
        let imprimir =this.nombre + ' edad  ' + this.edad + ' años ' + 'Su Pasatiempo son jugar: ' +this.pasatiempos;
        console.log(imprimir);
    }


}
console.log(person.nombre.toUpperCase());

person.toString();