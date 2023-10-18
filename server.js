// const express = require('express');
// const server = express();
// // const host = '127.0.0.1';
// const port = 3000;
// const listViewRouter = require('./list-view-router');
// const listEditRouter = require('./list-edit-router');

// // const tasks = [
// //   { id: 1, description: 'Hacer la compra', completed: false },
// //   { id: 2, description: 'Estudiar Node.js', completed: true },
// //   { id: 3, description: 'Hacer ejercicio', completed: false },
// // ];


// server.get('/', (req, res) => {
//   res.send('Hola mundo');
// });
// server.use('/list-view', listViewRouter);
// server.use('/list-edit', listEditRouter);


// // const server = http.createServer((req, res) => {
// //   if (req.url === '/tasks' && req.method === 'GET') {
// //     res.setHeader('Content-Type', 'application/json');
// //     res.end(JSON.stringify(tasks));
// //   } else {
// //     res.statusCode = 404;
// //     res.end('Ruta no encontrada');
// //   }
// // });

// server.listen(port, () => {
//   console.log(`Servidor en funcionamiento en http://localhost:${port}`);
// });

// module.exports = server
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const listEditRouter = require('./list-edit-router');
const listViewRouter = require('./list-view-router');
const { validateHTTPMethods } = require('./validationMiddleware');
app.use(express.json());

dotenv.config();
 
const SECRET_KEY = process.env.SECRET_KEY || "secretkey";

const users = [
  { email: "admin@example.com", password: "admin123", role: "admin", name: "Admin User" },
  { email: "user@example.com", password: "user123", role: "user", name: "Regular User" },
];

app.use(validateHTTPMethods);

app.post('/login', (req,res)=>{
  const { email } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ error: "Invalid user name or password" });
  }

  const { email: userEmail, role, name } = user;
  const token = jwt.sign({ email: userEmail, role, name }, SECRET_KEY, { algorithm: "HS256" });

  res.json({ token });
})


app.use('/edit', listEditRouter);
app.use('/view', listViewRouter);


app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});
