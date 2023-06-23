let converter = require('json-2-csv');
const exportButton = document.querySelector('#export-button')

exportButton.addEventListener('click', async () => {
    // pegar os dados do banco
    const retorno = await fetch('http://localhost:3000/empresa/selecionarempresa')
    const empresas = await retorno.json()

    conversorcsv(empresas)
})