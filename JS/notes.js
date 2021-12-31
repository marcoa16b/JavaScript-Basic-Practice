

//Exports

let number = 4;
const saludar = () => "¡Hola!";
const goodbye = () => "¡Adios!";
class Clase {}

export {
    number
}; // Se crea un módulo y se añade number

export {
    saludar,
    goodbye as despedir
}; // Se añade saludar y despedir al modulo exportado

export {
    Clase as default
}; // Se añade clase al modulo (default)

// Se crea un módulo y se añade funcFlechita1
export const funcFlechita1 = () => 42;

export default function funcViejita(){
    return console.log("Estos muchachitos con sus cosas!");
} // Se añade funcViejita al modulo (default)

// imports
