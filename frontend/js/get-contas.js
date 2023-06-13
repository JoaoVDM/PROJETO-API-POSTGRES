const divContas = document.querySelector('#contas')

async function consultaContas() {
    const retorno = await fetch('http://localhost:3000/contas/selecionarcontas')
    const contas = await retorno.json()
    preencheTela(contas);
}

function preencheTela(contas) {
    contas.forEach(conta => {
        const novasContas = `
        <div class="contas">
        <h3>${conta.Telefone}</h3>
        <p>Identificação: ${conta.Identificacao} </p>
        <p>Data: ${conta.Dia} </p>
        <p>Hora: ${conta.Hora} </p>
        <p>Valor: ${conta.Valor} </p>
        </div>
    `
        divContas.innerHTML = divContas.innerHTML + novasContas
    });
}

consultaContas()