const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
    // capturar os dados do formulario
    const contas = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(contas)
    console.log('Contas:::::::::::::', contas);
})


function getDadosForm() {
    const inputTelefone = document.querySelector('#Telefone')
    const inputIdentificacao = document.querySelector('#Identificacao')
    const inputDia = document.querySelector('#Dia')
    const inputHora = document.querySelector('#Hora')
    const inputValor = document.querySelector('#Valor')

    if (inputTelefone.value === null || inputIdentificacao.value || inputDia.value === null || inputHora.value === null || inputValor.value === null) {
        console.log('campos vazios');
        return
    }

    const contas = {
        Telefone: inputTelefone.value,
        Identificacao: inputIdentificacao.value,
        Dia: inputDia.value,
        Hora: inputHora.value,
        Valor: inputValor.value
    }
    return contas
}

async function enviarDadosParaAPI(contas) {
    try {
        const resposta = await fetch('http://localhost:3000/contas/registrarconta1', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contas)
        })
        console.log(':::::::', resposta.status);
        if (resposta.status === 200) {
            limparCampos()
            window.location.href = 'contas.html'
        } else {
            console.log('Erro ao adicionar curso');
        }
    } catch (erro) {
        console.log(erro);
    }
}

function limparCampos() {
    document.querySelector('#Telefone').value = ''
    document.querySelector('#Identificacao').value = ''
    document.querySelector('#Dia').value = ''
    document.querySelector('#Hora').value = ''
    document.querySelector('#Valor').value = ''
}