const elementoEmpresas = document.querySelector('#empresas')

async function consultaEmpresas() {
    const retorno = await fetch('localhost:3000/empresa/selecionarempresa')
    const empresas = await retorno.json()
    console.log(empresas);
}

consultaEmpresas()