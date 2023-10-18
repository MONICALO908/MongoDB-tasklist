const express = require('express');
const { JWTValidation } = require('./authMiddleware');
const { mostrarTareas, obtenerTarea } = require('.');
const { validateNumber } = require('./listEditMiddleware');
const listViewRouter = express.Router();


listViewRouter.use(JWTValidation)

listViewRouter.get('/completed', async(req, res) => {
  try {
    const response = await mostrarTareas(true)
    res.status(200).json(response)
  } catch (error) {
      res.status(500).send("Error interno del servidor")
  }
});


listViewRouter.get('/incomplete', async(req, res) => {
  try {
    const response = await mostrarTareas(false)
    res.status(200).json(response)
  } catch (error) {
      res.status(500).send("Error interno del servidor")
  }
});

listViewRouter.get('/getTasks', async(req, res) => {
  try {
    const response = await mostrarTareas()
    res.status(200).json(response)
  } catch (error) {
      res.status(500).send("Error interno del servidor")
  }
});

listViewRouter.use('/getTask/:id', validateNumber)
listViewRouter.get('/getTask/:id', async(req, res) => {
  const id = req.params.id
  try {
    const response = await obtenerTarea(id)
    res.status(200).json(response)
  } catch (error) {
      res.status(500).send("Error interno del servidor")
  }
});

module.exports = listViewRouter;
