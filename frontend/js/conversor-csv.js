let converter = require('json-2-csv');

await conversorcsv(data)

async function conversorcsv(data){

    let options = {
        delimiter : {
            field : ';', // Comma field delimiter
            eol   : '\n' // Newline delimiter
        }
    };
    
    let json2csvCallback = function (err, csv) {
        if (err) throw err;
        console.log(csv);
    };
    
    
    const dados = converter.json2csv(data, json2csvCallback, options);

    console.log('Conversão :::::: ', dados);
}