const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

const { mongoConn } = require('./databases/configuration')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

mongoConn()

const tipoProyectos = require('./routes/tipoProyecto')
const clientes = require('./routes/cliente')
/*const marca = require('./routes/marca')
const inventario = require('./routes/inventario')*/

// middlewares
app.use('/api/tiposproyectos', tipoProyectos)
app.use('/api/clientes', clientes)
/*app.use('/api/marcas', marca)
app.use('/api/inventarios', inventario)*/

module.exports = app