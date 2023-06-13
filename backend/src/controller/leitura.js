const fs = require('fs').promises;

async function lerArquivo(arquivo) {

  try {
    const data = await fs.readFile(arquivo, 'utf-8');

    return data

  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

module.exports = lerArquivo;