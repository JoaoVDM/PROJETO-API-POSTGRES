const exportButton = document.querySelector('#export-button')

exportButton.addEventListener('click', async () => {
    const retorno = await fetch('http://localhost:3000/pessoas/selecionarpessoa')
    const pessoas = await retorno.json()
    const pessoasFormatada = formatar(pessoas).toString()
    downloadCSVFile(pessoasFormatada)
})

function formatar(arr) {
    var arrayformatado = []
    var formato = [Object.keys(arr[0]).join(';')]
    arrayformatado.push(formato)
    for (let i = 0; i < arr.length; i++) {
        formato = [Object.values(arr[i])].join(';')
        arrayformatado.push(formato)
    }
    return arrayformatado.join('\n\r')
}

function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "Pessoas.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}