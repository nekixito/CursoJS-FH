function saludar( nombre ){
    console.log(arguments);
    console.log('Hola ' + nombre);
    //return 10;    
}

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);    
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}



const retornoDeSaludar = saludar('Antony', 39, true, 'México');
console.log({retornoDeSaludar});

saludar2('Miguel');
saludarFlecha();
saludarFlecha2('Antony');



function sumar(a,b){
    return a + b;
}

const sumar2 = (a,b) => {
    return a+b;
}

const sumar3 = (a,b) =>  a + b;

console.log(sumar(1,2));
console.log(sumar2(3,2));
console.log(sumar3(2,2));

function getAleatorio(){
    return Math.random();
}

//Convertir la función anterior en una función de flecha que no tenga llaves { }
const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());