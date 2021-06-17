/*
let promedios = [1,5,10,25,30,11, 'adasds', 32, 11, 10, 12, 'adasdsdasds'];
const nPromedios = promedios.length;
let total = 0;
//callback
promedios.forEach(function(n){
    if (!isNaN(n)){
        total += n;
    }
}); 
console.log('El promedio es ...', (total / nPromedios).toFixed(5));
*/

/* callback */

/*
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer);

function myDisplayer(some) {
  console.log('some =>', some);
}
*/


function generarNombre(nombre, apellido, myCallback)
{
    let nombreCompleto = `Nombre completo es ${nombre} ${apellido}`;
    myCallback(nombreCompleto);
}

generarNombre("Maximiliano", "Rossi", mostrarNombreEnPantalla);

function mostrarNombreEnPantalla(nombreCompleto)
{
    console.log(nombreCompleto);
}

