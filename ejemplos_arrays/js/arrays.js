let frutas = ['Manzana', 'Peras', 'Bananas'];
// Operaciones básicas con arrays..
// Agregar un elemento (al final, 1 o n)
frutas.push('Kiwi');
//frutas.push('Kiwi', 'Tomate', '...');
// Agregar un elemento Al principio...
frutas.unshift('Frutilla');
// Buscar un elemento en un array
const elementoAbuscar = 'Kiwi';
let i = frutas.indexOf(elementoAbuscar);
if (i >= 0){
    //console.log(`El elemento ${elementoAbuscar} se encuentra en la pos ${i}`);
    //console.log('El elemento ' + elementoAbuscar + ' se encuentra en la pos ' + pos);
}
let posElementoARemover = frutas.indexOf('Manzana');
frutas.splice(posElementoARemover, 1);
//console.log('frutas =>', frutas);

function agregarFruta(fruta, frutas)
{
    frutas.push(fruta);
}


function existeFruta(fruta, frutas)
{
    if (frutas.indexOf(fruta) >= 0){
        return true;
    }else{
        return false;
    }
}

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*

function existeFruta(fruta, frutas)
{
    let existe;
    frutas.indexOf(fruta) >= 0 ? existe = true : existe = false;
    return existe;
}

*/

/* Iterando arrays */

function recorrerFrutas()
{
    for(let i=0; i <= frutas.length-1; i++){
        console.log(frutas[i]);
    }
}

function recorrerFrutasOtraOpcion()
{
    frutas.forEach(function(fruta, i){
        console.log(`El elemento ${fruta} se encuentra en la pos ${i} \n`);
    });

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
}

//recorrerFrutas();
recorrerFrutasOtraOpcion();

