let tareas = [];
let tareasHTML = '';

function agregarTarea()
{
    const tarea = document.getElementById('nombre-tarea').value;
    if (tarea === ''){
        return;
    }
    tareas.push(tarea);
    //console.log(' tareas =>', tareas);
    generarHTML();
    clearInput('nombre-tarea');
}

function eliminarTarea(i)
{
    tareas.splice(i, 1);
    generarHTML();
}


// arrow function =>
clearInput = (idInput) => {
    document.getElementById(idInput).value = '';
}

function generarHTML()
{
    let salida = '';
    if (tareas.length > 0){
        salida = '<ul>'
        tareas.forEach(function(tarea, i){
            salida += `<li> Tarea => ${tarea} <a href="#" class="eliminar-tarea" onclick="eliminarTarea(${i})">Eliminar tarea</a> </li>`
        });
        salida += '</ul>';
    }else{
        salida = 'No hay tareas..';
    }
    document.getElementById('tareas-lista').innerHTML = salida;
}

