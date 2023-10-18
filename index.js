const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [{id:2, description:"trotar", completed:true}];

function mostrarTareas(tipo) {
  return new Promise((resolve, reject) => {

    const respuesta = tipo != null 
      ? tareas.filter(tarea=>tarea.completed==tipo)
      : tareas
    resolve(respuesta);
  });
}

function agregarTarea(tarea) {
  return new Promise((resolve, reject) => {
    tareas.push(tarea);
      resolve("creado");
  });
}

function eliminarTarea(numero) {
  return new Promise((resolve, reject) => {
    const index = numero - 1;
    if (index >= 0 && index < tareas.length) {
      tareas.splice(index, 1);
      resolve(tareas)
    } else {
      reject(new Error('Número de tarea inválido.'));
    }
  });
}

function completarTarea(numero) {
  return new Promise((resolve, reject) => {
    const index = numero - 1;
    if (index >= 0 && index < tareas.length) {
      tareas[index].estado = true;
      resolve(tareas);
    } else {
      reject(new Error('Número de tarea inválido.'));
    }
  });
}

function obtenerTarea(numero) {
  return new Promise((resolve, reject) => {
    const index = numero - 1;
    if (index >= 0 && index < tareas.length) {
      resolve(tareas[index]);
    } else {
      reject(new Error('Número de tarea inválido.'));
    }
  });
}

// function mostrarMenu() {
//   console.log('\n===== Gestión de Tareas =====');
//   console.log('1. Mostrar tareas');
//   console.log('2. Agregar tarea');
//   console.log('3. Eliminar tarea');
//   console.log('4. Completar tarea');
//   console.log('5. Salir');
//   rl.prompt();
// }

// function obtenerOpcion() {
//   return new Promise((resolve, reject) => {
//     rl.on('line', (line) => {
//       const opcion = parseInt(line.trim());
//       if (isNaN(opcion)) {
//         reject(new Error('Opción inválida.'));
//       } else {
//         resolve(opcion);
//       }
//     });
//   });
// }

// function iniciarGestionTareas() {
//   return new Promise((resolve, reject) => {
//     console.log('Bienvenido a la Gestión de Tareas.');
//     mostrarMenu();
//     obtenerOpcion()
//       .then((opcion) => {
//         switch (opcion) {
//           case 1:
//             mostrarTareas()
//               .then(() => {
//                 iniciarGestionTareas();
//               })
//               .catch((error) => {
//                 console.error('Error:', error);
//                 iniciarGestionTareas();
//               });
//             break;
//           case 2:
//             agregarTarea()
//               .then(() => {
//                 iniciarGestionTareas();
//               })
//               .catch((error) => {
//                 console.error('Error:', error);
//                 iniciarGestionTareas();
//               });
//             break;
//           case 3:
//             eliminarTarea()
//               .then(() => {
//                 iniciarGestionTareas();
//               })
//               .catch((error) => {
//                 console.error('Error:', error);
//                 iniciarGestionTareas();
//               });
//             break;
//           case 4:
//             completarTarea()
//               .then(() => {
//                 iniciarGestionTareas();
//               })
//               .catch((error) => {
//                 console.error('Error:', error);
//                 iniciarGestionTareas();
//               });
//             break;
//           case 5:
//             rl.close();
//             break;
//           default:
//             console.log('Opción inválida.');
//             iniciarGestionTareas();
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         iniciarGestionTareas();
//       });
//   });
// }

// iniciarGestionTareas();
 

module.exports={
  mostrarTareas,
  agregarTarea,
  completarTarea,
  obtenerTarea,
  eliminarTarea};