const express = require('express')
const { empresa } = require('../models/index')
const ler = require('../controller/leitura.js')
const router = express.Router()

router.get('/selecionarempresa', async (req, res) => {
    const empresas = await empresa.findAll()
    res.json(empresas)
})

router.post('/registrarempresa1', async (req, res) => {
    const { Nome, Endereço } = req.body
    await empresa.create({ Nome, Endereço })
    res.send('Empresa adicionada com sucesso!')
})

router.post('/registrarempresa2', async (req, res) => {
    const leitura = await ler('./contas/empresa.txt');

    var leitura2 = leitura.split('\r\n')

    leitura2.map(async (item) => {
        var valor = item.split(';')
        await empresa.create({ Nome: valor[0], Endereço: valor[1] })
    })
    res.send('Empresa adicionada com sucesso!')
})

router.delete('/apagarempresa/:id', async (req, res) => {
    const empresa_id = req.params.id;

    //verificar se o ID existe
    const empresa_existe = await empresa.findByPk(empresa_id)

    if (empresa_existe) {
        await empresa.destroy({
            where: {
                id: empresa_id
            }
        })
    } else {
        return res.send(`Empresa com ID ${empresa_id} não existe!`)
    }
    res.send(`Empresa com ID ${empresa_id} excluído com sucesso!`);
});


router.put('/updateempresa/:id', async (req, res) => {
    const { Nome, Endereço } = req.body
    const empresa_id = req.params.id;
    console.log('empresa_id ::::::: ', empresa_id);
    const empresa_existe = await empresa.findByPk(empresa_id)

    if (empresa_existe) {
        await empresa.update({
            Nome,
            Endereço
        }, {
            where: {
                id: empresa_id
            }
        })
    } else {
        return res.send(`Empresa com ID ${empresa_id} não existe!`)
    }
    res.send(`Empresa com ID ${empresa_id} foi atualizada com sucesso!`);
})


module.exports = router