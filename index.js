const readline = require('readline');
const connectDB = require("./db/db");
const TaskModel = require('./models/taskModel');

connectDB();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const tareas = [{id:2, description:"trotar", completed:true}];

function mostrarTareas(tipo) {
  return new Promise(async (resolve, reject) => {

    const respuesta = tipo != null 
      ? await TaskModel.find({
        completed: tipo
      })
      : await TaskModel.find();
    resolve(respuesta);
  });
}

function agregarTarea(tarea) {
  return new Promise(async (resolve, reject) => {
    
    const task = new TaskModel(tarea)
    await task.save()
      resolve("creado");
  });
}

function eliminarTarea(numero) {
  return new Promise(async (resolve, reject) => {

    const taskDeleted = await TaskModel.deleteOne({_id:numero})

    if (taskDeleted) {
      
      resolve(taskDeleted)
    } else {
      reject(new Error('Número de tarea inválido.'));
    }
  });
}

function completarTarea(numero) {
  return new Promise(async (resolve, reject) => {

    const taskCompleted = await TaskModel.updateOne({_id:numero},{completed:true})

    if (taskCompleted) {
      resolve(taskCompleted);
    } else {
      reject(new Error('Número de tarea inválido.'));
    }
  });
}

function obtenerTarea(numero) {
  return new Promise(async (resolve, reject) => {

    const task = await TaskModel.findOne({_id:numero})
  
    if (task) {
      resolve(task);
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