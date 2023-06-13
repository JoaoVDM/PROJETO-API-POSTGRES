const divEmpresas = document.querySelector('#empresas')

async function consultaEmpresas() {
    const retorno = await fetch('http://localhost:3000/empresa/selecionarempresa')
    const empresas = await retorno.json()
    preencheTela(empresas);
}

function preencheTela(empresas) {
    empresas.forEach(empresa => {
        const novaEmpresa = `
        <div class="empresa">
        <h3>${empresa.Nome}</h3>
        <p>Endereço: ${empresa.Endereço} </p>
        </div>
    `
        divEmpresas.innerHTML = divEmpresas.innerHTML + novaEmpresa
    });
}

consultaEmpresas()