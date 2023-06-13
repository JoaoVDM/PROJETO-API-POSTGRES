const divPessoas = document.querySelector('#pessoas')

async function consultaPessoas() {
    const retorno = await fetch('http://localhost:3000/pessoas/selecionarpessoa')
    const pessoas = await retorno.json()
    preencheTela(pessoas);
}

function preencheTela(pessoas) {
    pessoas.forEach(pessoa => {
        const novasPessoas = `
        <div class="pessoas">
        <h3>${pessoa.Nome}</h3>
        <p>Telefone: ${pessoa.Telefone} </p>
        </div>
    `
        divPessoas.innerHTML = divPessoas.innerHTML + novasPessoas
    });
}

consultaPessoas()