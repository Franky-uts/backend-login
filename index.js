const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
//Capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//Configuracion de CORS
const cosrCaption = {
    origin: '*',
    optionSuccessStatus: 200
}
app.use(cors(cosrCaption))

//Conexion con la Base de datos 
const url = `mongodb+srv://Franky:Holamundo@cluster0.udzdwkt.mongodb.net/${process.env.DBNAME}`
mongoose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>console.log('Conectando a la base de datos')).catch((error => console.log('Error de conexión: ')+error))

//Importar las rutas 
const authRoutes = require('./routes/auth')

//Ruta para el midleware
app.use('/api/user',authRoutes)

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
/*
Mongo Contraseña: Holamundo
Usuario: Franky
*/