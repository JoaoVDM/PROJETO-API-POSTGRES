// Arquivo responsavel por fazer o tratamento das rotas
const express = require('express')

const contasRouter = require('./contas')
const empresaRouter = require('./empresa')
const pessoasRouter = require('./pessoas')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('App online!')
})

router.use('/contas', contasRouter)
router.use('/empresa', empresaRouter)
router.use('/pessoas', pessoasRouter)

module.exports = router