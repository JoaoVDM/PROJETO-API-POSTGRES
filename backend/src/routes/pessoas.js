const express = require('express')
const { pessoas } = require('../models/index')
const ler = require('../controller/leitura.js')
const router = express.Router()

router.get('/selecionarpessoa', async (req, res) => {
    const pessoa = await pessoas.findAll()
    res.json(pessoa)
})

router.post('/registrarpessoas1', async (req, res) => {
    const { Nome, Telefone } = req.body
    await pessoas.create({ Nome, Telefone })
    res.send('Pessoas adicionada com sucesso!')
})

router.post('/registrarpessoas2', async (req, res) => {
    const leitura = await ler('./contas/pessoas.txt');
    var leitura2 = leitura.split('\r\n')

    leitura2.map(async (item) => {
        var valor = item.split(';')
        await pessoas.create({ Nome: valor[0], Telefone: valor[1] })
    })
    res.send('Pessoas adicionada com sucesso!')
})

router.delete('/apagarpessoas/:id', async (req, res) => {
    const pessoa_id = req.params.id;

    //verificar se o ID existe
    const pessoa_existe = await pessoas.findByPk(pessoa_id)

    if(pessoa_existe) {
        await pessoas.destroy({
            where: {
                id: pessoa_id
            }
        })
    } else {
        return res.send(`Pessoa com o ID ${pessoa_id} não existe!`)
    }
    res.send(`Pessoa com ID ${pessoa_id} foi excluído com sucesso!`);
});

router.put('/updatepessoas/:id', async (req, res) => {
    const { Nome, Telefone } = req.body
    const pessoas_id = req.params.id;
    console.log('pessoas_id ::::::: ', pessoas_id);
    const pessoas_existe = await pessoas.findByPk(pessoas_id)

    if (pessoas_existe) {
        await pessoas.update({
            Nome,
            Telefone
        }, {
            where: {
                id: pessoas_id
            }
        })
    } else {
        return res.send(`Pessoa com ID ${pessoas_id} não existe!`)
    }
    res.send(`Pessoa com ID ${pessoas_id} foi atualizada com sucesso!`);
})

module.exports = router