const express = require('express');
const router = express.Router();
const { validatePostData, validateNumber } = require('./listEditMiddleware');
// const { JWTValidation } = require('./authMiddleware');
const { agregarTarea, completarTarea, eliminarTarea } = require('.');

router.use(validatePostData)
// router.use(JWTValidation)
router.use("/create-task",(req, res, next) => {
    const {title, description, completed } = req.body;
  
    if (title && description && completed !== undefined) {
      next();
    } else {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe contener description y completed.' });
    }
  })
router.post('/create-task',async(req,res) => {
    try {
        const response = await agregarTarea(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send("Error interno del servidor")
    }
    res.send()
});

router.use('/update-task/:id', validateNumber)
router.put('/update-task/:id', async(req,res) =>{
    const id = req.params.id
    try {
        const response = await completarTarea(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send(error)
    }
});

router.use('/delete-task/:id', validateNumber)
router.delete('/delete-task/:id',async(req,res) => {
    const id = req.params.id
    try {
        const response = await eliminarTarea(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send("Error interno del servidor")
    }
    res.send()
});



module.exports = router;
