const express = require('express')
const { contas } = require('../models/index')
const ler = require('../controller/leitura.js')
const router = express.Router()

router.get('/selecionarcontas', async (req, res) => {
    const conta = await contas.findAll()
    res.json(conta)
})

router.post('/registrarconta1', async (req, res) => {
    const { Telefone, Identificacao, Dia, Hora, Valor } = req.body
    await contas.create({ Telefone, Identificacao, Dia, Hora, Valor })
    res.send('Contas adicionadas com sucesso!')
})

router.post('/registrarconta2', async (req, res) => {
    const leitura = await ler('./contas/conta.txt');
    var leitura2 = leitura.split('\r\n')

    leitura2.map(async (item) => {
        var valor = item.split(';')
        await contas.create({ Telefone: valor[0], Identificacao: valor[1], Dia: valor[2], Hora: valor[3], Valor: valor[4] })
    })
    res.send('Contas adicionadas com sucesso!')
})

router.delete('/apagarcontas/:id', async (req, res) => {
    const conta_id = req.params.id;

    //verificar se o ID existe
    const conta_existe = await contas.findByPk(conta_id)

    if (conta_existe) {
        await contas.destroy({
            where: {
                id: conta_id
            }
        })
    } else {
        return res.send(`Conta com ID ${conta_id} não existe!`)
    }
    res.send(`Conta com ID ${conta_id} excluído com sucesso!`);
});

router.put('/updatecontas/:id', async (req, res) => {
    const { Telefone, Identificacao, Dia, Hora, Valor } = req.body
    const contas_id = req.params.id;
    console.log('contas_id ::::::: ', contas_id);
    const empresa_existe = await contas.findByPk(contas_id)

    if (empresa_existe) {
        await empresa.update({
            Telefone,
            Identificacao,
            Dia,
            Hora,
            Valor
        }, {
            where: {
                id: contas_id
            }
        })
    } else {
        return res.send(`Contas com ID ${contas_id} não existe!`)
    }
    res.send(`Contas com ID ${contas_id} foi atualizada com sucesso!`);
})


module.exports = router