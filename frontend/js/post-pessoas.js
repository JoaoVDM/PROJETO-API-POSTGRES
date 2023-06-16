const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
    // capturar os dados do formulario
    const pessoas = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(pessoas)
})

function getDadosForm() {
    const inputNome = document.querySelector('#Nome')
    const inputTelefone = document.querySelector('#Telefone')

    if (inputNome.value === null || inputTelefone.value === null) {
        console.log('campos vazios');
        return
    }

    const pessoas = {
        Nome: inputNome.value,
        Telefone: inputTelefone.value
    }
    return pessoas
}

async function enviarDadosParaAPI(pessoas) {
    try {
        const resposta = await fetch('http://localhost:3000/pessoas/registrarpessoas1', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoas)
        })
        if (resposta.status === 200) {
            limparCampos()
            window.location.href = 'pessoas.html'
        } else {
            console.log('Erro ao adicionar curso');
        }
    } catch (erro) {
        console.log(erro);
    }
}

function limparCampos() {
    document.querySelector('#Nome').value = ''
    document.querySelector('#Telefone').value = ''
}