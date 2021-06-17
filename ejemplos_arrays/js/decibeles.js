function chequearNiveles( decibeles )
{
    let salida = '';

    if (decibeles < 0 ){
        salida =  'No emite sonido';
    }

    if (decibeles > 0 && decibeles <= 30){
        salida =  'Susurrando';
    }
    
    if (decibeles > 30 && decibeles <= 60){
        salida =  'Normal';
    }

    if (decibeles > 60){
        salida =  'Escandalo';
    }

    console.log(' Salida => ', salida);

    return salida;
}


function chequearNivelesEnPantalla()
{
   
    let decibeles = document.getElementById('decibeles').value;
    
    let salida = '';

    if (decibeles < 0 ){
        salida =  'No emite sonido';
    }

    if (decibeles > 0 && decibeles <= 30){
        salida =  'Susurrando';
    }
    
    if (decibeles > 30 && decibeles <= 60){
        salida =  'Normal';
    }
    
    if (decibeles > 60){
        salida =  'Escandalo';
    }

    console.log(' Salida => ', salida);

    return salida;
}


function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

/*
let persona1 = 20;
let persona2 = 10;
let persona3 = 40;
*/

/*
let randomNumber = getRandomArbitrary(1, 100);

console.log('Number random =>', randomNumber);
chequearNiveles(randomNumber);
*/


/*

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
...
else
   sentenciaN
*/

/*
Diferencia entre == y ===
*/

