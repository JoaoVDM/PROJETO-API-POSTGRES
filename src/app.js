const express = require('express')
const routers = require('./routes/route')
const { sequelize } = require('./models/index')

const app = express()

// Tratar as requisição com formato json
app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
    console.log('Conectado com o Banco de Dados!');
})

app.listen(3000, () => {
    console.log('App online!');
})