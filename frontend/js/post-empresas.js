const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
    // capturar os dados do formulario
    const empresa = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(empresa)
})

function getDadosForm() {
    const inputNome = document.querySelector('#Nome')
    const inputEndereco = document.querySelector('#Endereco')

    if (inputNome.value === null || inputEndereco.value === null) {
        console.log('campos vazios');
        return
    }

    const empresa = {
        Nome: inputNome.value,
        Endereço: inputEndereco.value
    }
    return empresa
}

async function enviarDadosParaAPI(empresa) {
    try {
        const resposta = await fetch('http://localhost:3000/empresa/registrarempresa1', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empresa)
        })
        if (resposta.status === 200) {
            limparCampos()
            window.location.href = 'empresas.html'
        } else {
            console.log('Erro ao adicionar curso');
        }
    } catch (erro) {
        console.log(erro);
    }
}

function limparCampos() {
    document.querySelector('#Nome').value = ''
    document.querySelector('#Endereco').value = ''
}
