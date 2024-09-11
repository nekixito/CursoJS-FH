function saludar( nombre ){
    console.log(arguments);
    console.log('Hola ' + nombre);    
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

saludar('Antony', 39, true, 'México');
saludar2('Miguel');
saludarFlecha();
saludarFlecha2('Antony');