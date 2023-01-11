const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()
//Capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//Conexion con la Base de datos 


//Importar las rutas 


//Ruta para el midleware
app.get('/',(req,res)=>{
    res.json({
        estado: true,
        mensaje: 'Funciona correcto :)'
    })
})

//Arrancar el servidor
const PORT = process.env.PORT || 3005
app.listen(PORT,()=>{
    console.log(`Servidor en Ejecucion: ${PORT}`)
})